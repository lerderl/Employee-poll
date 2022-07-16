import { showLoading, hideLoading } from "react-redux-loading-bar";

import { getUsers } from "./users";
import { getQuestions } from "./questions";
import { getInitialData } from "../utils/api";

export function handleInitialData() {
  console.log('Getting initial data:');

  return async dispatch => {
    dispatch(showLoading());
    console.log('Show loading');

    const { users, questions } = await getInitialData();
    dispatch(getUsers(users));
    dispatch(getQuestions(questions));
    dispatch(hideLoading());
  };
};
