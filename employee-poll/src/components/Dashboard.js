import { useState } from "react";
import { connect } from "react-redux";

import Authenticate from "./Authenticate";
import PreviewQuestion from "./PreviewQuestion";

const Dashboard = ({ votedFor, notVotedFor, users }) => {
  const [answeredQuestions, setAnsweredQuestions] = useState(false);

  const handleClick = () => {
    setAnsweredQuestions(!answeredQuestions);
  };

  return (
    <div>
      <Authenticate />
      <button className="btn btn-primary mt-3" onClick={handleClick}>Show {answeredQuestions ? "Unanswered" : "Answered"} Polls</button>
      {!answeredQuestions ? (
        <div className="card mt-3">
          <div className="card-header text-center">New Questions</div>
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-3">
                {notVotedFor.length ? notVotedFor.map(question => {
                  return (
                    <PreviewQuestion key={question.id} question={question} user={users[question.author]} id={question.id} />
                  );
                }) : ''}
              </div>
            </div>
        </div>
      ) : (
        <div className="card mt-3">
          <div className="card-header text-center">Done</div>
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-3">
                {votedFor.length ? votedFor.map(question => {
                  return (
                    <PreviewQuestion key={question.id} question={question} user={users[question.author]} id={question.id} />
                  );
                }) : ''}
              </div>
            </div>
        </div>
      )}



    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => {
  const voteCount = Object.keys(questions).map(question => questions[question]);

  const votedFor = voteCount
    .filter(
      question =>
        question.optionOne.votes.includes(authedUser) ||
        question.optionOne.votes.includes(authedUser)
    )
    .sort((a, b) => b.timestamp - a.timestamp);

  const notVotedFor = voteCount
    .filter(question => !votedFor.includes(question))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    questions,
    votedFor,
    notVotedFor,
    users
  };
};

export default connect(mapStateToProps)(Dashboard);
