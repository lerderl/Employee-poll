import { connect } from "react-redux";

import Authenticate from "./Authenticate";

const Leaderboard = ({ users }) => {
  const userRank = users.sort((a, b) => b.totalScore - a.totalScore);

  return (
    <div className="container">
      <Authenticate />
      <h1 className="text-center">LEADERBOARD</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Users</th>
            <th scope="col">Answered Questions</th>
            <th scope="col">Created Questions</th>
          </tr>
        </thead>
        <tbody>
          {userRank.map(user => {
            return (
              <tr key={user.id}>
                {console.log(user.avatarURL)}
                <td>
                  <img src={`${user.avatarURL}`} className="d-inline-block align-text-top" alt={`${user.id}`} />
                  {user.name}
                </td>
                <td>
                  {/* {Object.keys(users.answers).length} */}
                </td>
                <td>{user.questions.length}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const userRankList = Object.values(users);

  userRankList.map(user => (user.totalScore = Object.keys(user.answers).length + user.questions.length));

  return {
    users: userRankList
  };
};

export default connect(mapStateToProps)(Leaderboard);
