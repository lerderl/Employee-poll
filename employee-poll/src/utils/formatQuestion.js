export default function formatQuestion (question, author, authedUser) {
  let hasAnswer = false;
  let isAuthor = false;
  let voteSelected = '';

  const {
    id,
    timestamp,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  } = question;

  if (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)) {
    hasAnswer = true;
    if (question.optionOne.votes.includes(authedUser)) {
      voteSelected = question.optionOne.text;
    } else if (question.optionTwo.votes.includes(authedUser)) {
      voteSelected = question.optionTwo.text;
    };
  };

  if (author === authedUser) {
    isAuthor = true;
  };

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  const optionOnePercent = Math.round((optionOneVotes / totalVotes) * 100);
  const optionTwoPercent = Math.round((optionTwoVotes / totalVotes) * 100);

  return {
    id,
    timestamp,
    name: author.name,
    avatarURL: author.avatarURL,
    optionOneText,
    optionTwoText,
    hasAnswer,
    voteSelected,
    isAuthor,
    totalVotes,
    optionOnePercent,
    optionTwoPercent,
  };
};
