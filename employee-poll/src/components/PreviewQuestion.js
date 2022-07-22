import { Link } from "react-router-dom";

import Authenticate from "./Authenticate";
import { formatDate } from "../utils/formatDate";

const PreviewQuestion = ({ question, user, id }) => {
  return (
    <div className="col">
      <Authenticate />
      <div className="card h-100 text-center">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{formatDate(question.timestamp)}</p>
        </div>
        <div className="card-footer text-muted">
          <Link to={`/questions/${id}`} className="btn btn-primary">Show</Link>
        </div>
      </div>
    </div>
  );
};

export default PreviewQuestion;
