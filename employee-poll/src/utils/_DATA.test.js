import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe('_saveQuestion', () => {
  it('will save a new question if all expected fields are populated', async () => {
    const optionOneText = "Would you rather be a web developer";
    const optionTwoText = "Would you rather be a data scientist";
    const author = "tylermcginnis";

    const question = {optionOneText, optionTwoText, author};

    const responseExpected = {
      author,
      optionOne: {
        votes: [],
        text: optionOneText,
      },
      optionTwo: {
        votes: [],
        text: optionTwoText,
      }
    };

    expect(await _saveQuestion(question)).toMatchObject(responseExpected);
  });

  it('will fail to save new question if incorrect data is passed', async () => {
    const question = "Please provide optionOneText, optionTwoText, and author";
    await expect(_saveQuestion({})).rejects.toMatch(question);
  });
});

describe('_saveQuestionAnswer', () => {
  it('will save answer', async () => {
    const authedUser = "tylermcginnis";
    const qid = "xj352vofupe1dqz9emx13r";
    const answer = "optionOne";

    const response = {authedUser, qid, answer};

    expect(await _saveQuestionAnswer(response)).resolves.toBeTruthy;
  });

  it('will fail to save answer', async () => {
    const response = "Please provide authedUser, qid, and answer";
    await expect(_saveQuestionAnswer({})).rejects.toMatch(response);
  });
});
