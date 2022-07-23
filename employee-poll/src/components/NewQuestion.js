import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Authenticate from "./Authenticate";
import { handleAddQuestion } from "../actions/questions";

const NewQuestion = ({ dispatch, authedUser }) => {
  const navigate = useNavigate();

  const [firstOption, setFirstOption] = useState('');
  const [secondOption, setSecondOption] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const question = {
      optionOneText: firstOption,
      optionTwoText: secondOption
    };

    try {
      dispatch(handleAddQuestion(question));
      setSuccess(true);
      setError(false);
    } catch (e) {
      setSuccess(false);
      setError(true);
    }

    setFirstOption('');
    setSecondOption('');
    navigate('/');
  };

  const optionOneChange = e => {
    setFirstOption(e.target.value);
  };

  const optionTwoChange = e => {
    setSecondOption(e.target.value);
  };

  return (
    <div className="container text-center">
      <Authenticate />
      {success && (
        <h1 data-testid="success-header">Question saved successfully</h1>
      )}
      {error && (
        <h1 data-testid="error-header">Error: Something went wrong.</h1>
      )}
      <h1 className="text-dark">Would you rather</h1>
      <h6 className="text-secondary">Create your own poll</h6>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="firstOptionValue" class="form-label">
            First Option
          </label>
          <input
            value={firstOption}
            class="form-control"
            name="firstOptionValue"
            placeholder="Option One"
            onChange={optionOneChange}
            data-testid="option-one-input"
            required
          />
        </div>
        <div class="mb-3">
          <label htmlFor="secondOptionValue" class="form-label">
            Second option
          </label>
          <input
            value={secondOption}
            class="form-control"
            name="secondOptionValue"
            placeholder="Option Two"
            onChange={optionTwoChange}
            data-testid="option-two-input"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          data-testid="submit-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  };
};

export default connect(mapStateToProps)(NewQuestion);