import { ADD_QUESTION, GET_QUESTIONS, QUESTION_ANSWER } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };

    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };

    case QUESTION_ANSWER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.answer]: {
            ...state[action.id][action.answer],
            votes: state[action.id][action.answer].votes.concat([action.authedUser])
          }
        }
      };
  
    default:
      return state;
  };
};
