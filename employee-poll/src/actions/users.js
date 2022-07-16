export const GET_USERS = 'GET_USERS';
export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER';
export const SAVE_QUESTION_TO_USER = 'SAVE_QUESTION_TO_USER';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  };
};

export function saveQuestionToUser(question) {
  return {
    type: SAVE_QUESTION_TO_USER,
    question
  };
};

export function saveAnswerToUser({ id, answer, authedUser }) {
  return {
    type: SAVE_ANSWER_TO_USER,
    id,
    answer,
    authedUser
  };
};
