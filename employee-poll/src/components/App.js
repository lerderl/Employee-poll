import { connect } from "react-redux";
import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingBar } from "react-redux-loading-bar";

import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import Leaderboard from "./Leaderboard";
import PageNotFound from "./PageNotFound";
import QuestionPage from "./QuestionPage";
import { handleInitialData } from "../actions/shared";

const App = props => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <Fragment>
      <LoadingBar />
      <NavBar />
      <div className="container">
        {props.loading === true ? null : (
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/login" element={<LoginPage />} />
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/questions/:id" element={<QuestionPage />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ questions }) => ({
  loading: questions === null
});

export default connect(mapStateToProps)(App);
