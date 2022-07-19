import { connect } from "react-redux";
import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingBar } from "react-redux-loading-bar";

import LoginPage from "./LoginPage";
import PageNotFound from "./PageNotFound";
import { handleInitialData } from "../actions/shared";
import NavBar from "./NavBar";

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
            <Route exact path="/login" element={<LoginPage />} />
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
