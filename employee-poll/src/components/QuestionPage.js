import { connect } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import Authenticate from "./Authenticate";
// import { withRouter } from "../utils/withRouter";
import { handleAnswer } from "../actions/questions";
import formatQuestion from "../utils/formatQuestion";

const withRouter = Component => {
  const ComponentWithRouterProp = props => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const QuestionPage = ({ question, dispatch, id }) => {
	console.log(`Question: ${question}`);
	console.log(`${dispatch}`);
	console.log(`Id: ${id}`);
	const navigate = useNavigate();

	if (question === null) {
		return (
			<Link to='/'>Go back to Dashboard</Link>
		);
	};

	const {
		name,
    avatarURL,
    optionOneText,
    optionTwoText,
    hasAnswer,
    voteSelected,
    totalVotes,
    optionOnePercent,
    optionTwoPercent,
	} = question;

	const handleClick = answer => {
		dispatch(handleAnswer(id, answer));
		navigate(`/questions/${id}`);
	};

	return (
		<div className="container gap-2 col-md-5 mx-auto">
			<Authenticate />
			<div className="text-center">
				Question by {name}
				<img src={avatarURL} className="rounded mx-auto d-block gap-2 col-md-1" alt="..." />
			</div>
			<div className="text-center">
				<h6>Would you rather</h6>
				{hasAnswer ? (
					<div>
						<span>You have already answered this question.</span>
            <button className="btn btn-primary" type="button" disabled>{voteSelected}</button>
            <hr />
            <h3>Vote Status:</h3>
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

const mapStateToProps = ({ authedUser, users, questions }, {id}) => {
	// const { id } = props.router.params;
	const question = questions[id];

	return {
		authedUser,
		id,
		question: question ? formatQuestion(question, users[question.author], authedUser) : null
	};
};

export default withRouter(connect(mapStateToProps)(QuestionPage));
