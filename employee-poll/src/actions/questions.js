import { showLoading, hideLoading } from "react-redux-loading-bar";

import { saveAnswerToUser, saveQuestionToUser } from "./users";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const ADD_QUESTION = 'ADD_QUESTION';
export const GET_QUESTIONS = "GET_QUESTIONS";
export const QUESTION_ANSWER = 'QUESTION_ANSWER';

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  };
};

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
};

export function questionAnswer({ id, answer, authedUser }) {
  return {
    type: QUESTION_ANSWER,
    id,
    answer,
    authedUser
  };
};

export function handleAddQuestion({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }).then(question => {
      dispatch(addQuestion(question));
      dispatch(saveQuestionToUser(question));
      dispatch(hideLoading());
    }).catch(e => {
      console.log('Error occurred when adding question: ' + e);
    });
  };
  // return async (dispatch, getState) => {
  //   const { authedUser } = getState();
  //   dispatch(showLoading());

  //   try {
  //     const question = await saveQuestion({
  //       optionOneText,
  //       optionTwoText,
  //       author: authedUser
  //     });
      // dispatch(addQuestion(question));
      // dispatch(saveQuestionToUser(question));
      // dispatch(hideLoading());
  //   } catch (e) {
  //     console.log('Error occurred when adding question: ' + e);
  //   }
  // };
};

export function handleAnswer(id, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestionAnswer({ id, answer, authedUser }).then(() => {
      dispatch(questionAnswer({ id, answer, authedUser }));
      dispatch(saveAnswerToUser({ id, answer, authedUser }));
    });
  };
  // return async (dispatch, getState) => {
  //   const { authedUser } = getState();

  //   await saveQuestionAnswer({ id, answer, authedUser });
    // dispatch(questionAnswer({ id, answer, authedUser }));
    // dispatch(saveAnswerToUser({ id, answer, authedUser }));
  // };
};
