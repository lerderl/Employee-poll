import { showLoading, hideLoading } from "react-redux-loading-bar";

import { getUsers } from "./users";
import { getQuestions } from "./questions";
import { getInitialData } from "../utils/api";

export function handleInitialData() {
  console.log('Getting initial data:');

  return dispatch => {
    dispatch(showLoading());
    console.log('Show loading');

    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
    });
  };
};
