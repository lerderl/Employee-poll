import { connect } from "react-redux";
import { Fragment, useEffect } from "react";
import { LoadingBar } from "react-redux-loading-bar";

import { handleInitialData } from "../actions/shared";

const App = props => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <Fragment>
      <LoadingBar />
    </Fragment>
  );
};

export default connect()(App);
