import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Authenticate from "./Authenticate";
import image from "../images/avatar3.png";
import PageNotFound from "./PageNotFound";
import { withRouter } from "../utils/withRouter";
import { questionAnswer } from "../actions/questions";
import formatQuestion from "../utils/formatQuestion";

const QuestionPage = ({ question, dispatch, id, authedUser }) => {
	const navigate = useNavigate();

	if (question === null) {
		return (
			<PageNotFound />
		);
	};

	const {
		name,
    // avatarURL,
    optionOneText,
    optionTwoText,
    hasAnswer,
    voteSelected,
    totalVotes,
    optionOnePercent,
    optionTwoPercent,
	} = question;

	const handleClick = answer => {
		dispatch(questionAnswer({ id, answer, authedUser}));
		navigate(`/questions/${id}`);
	};

	return (
		<div className="container gap-2 col-md-5 mx-auto">
			<Authenticate />
			<div className="text-center">
				Question by {name}
				<img src={image} className="rounded mx-auto d-block gap-2 col-md-1" alt="..." />
			</div>
			<div className="text-center">
				<h6>Would you rather</h6>
				{hasAnswer ? (
					<div>
						<span>You have already answered this question.</span>
            <p>Your choice: <button className="btn btn-primary" type="button" disabled>{voteSelected}</button></p>
            <hr />
            <h3>Vote Status:</h3>
            <p>Option one: <button className="btn btn-primary" type="button" disabled>{optionOneText}</button></p>
            <p>Option two: <button className="btn btn-primary mt-3 mb-3" type="button" disabled>{optionTwoText}</button></p>
						<table className="table table-bordered">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Option</th>
									<th scope="col">Percent</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>{optionOneText}</td>
									<td>{optionOnePercent}%</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>{optionTwoText}</td>
									<td>{optionTwoPercent}%</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>TOTAL VOTES</td>
									<td>{totalVotes}</td>
								</tr>
							</tbody>
						</table>
					</div>
				) : (
					<div className="d-grid gap-2 col-6 mx-auto">
						<span>Click on one of the two options</span>
						<button className="btn btn-primary" type="button" onClick={() => handleClick('optionOne')}>{optionOneText}</button>
						<button className="btn btn-primary" type="button" onClick={() => handleClick('optionTwo')}>{optionTwoText}</button>
					</div>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = ({ authedUser, users, questions }, props) => {
	const { id } = props.router.params;
	const question = questions[id];

	return {
		authedUser,
		id,
		question: question ? formatQuestion(question, users[question.author], authedUser) : null
	};
};

export default withRouter(connect(mapStateToProps)(QuestionPage));
