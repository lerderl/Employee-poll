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
      <div className="container">
        <header>Employee poll app</header>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ questions }) => ({
  loading: questions === null
});

export default connect(mapStateToProps)(App);
