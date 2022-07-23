import { useState } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { setAuthedUser } from '../actions/authedUser';

const LoginPage = ({ userIds, users, dispatch }) => {
  // console.log(`LoginPage - userIds: ${JSON.stringify(userIds)}`);
  // console.log(`LoginPage - Users: ${JSON.stringify(users)}`);
  // console.log('User ids: ', userIds);
  const [optionSelected, setOptionSelected] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  // const location = useLocation();

  const handleChange = e => {
    e.preventDefault();
    setOptionSelected(e.target.value);

    if (e.target.value !== '' && e.target.value !== 'none') {
      dispatch(setAuthedUser(e.target.value));
      // navigate(location?.state?.location);
    } else if (e.target.value === 'none') {
      dispatch(setAuthedUser(''));
      navigate('/login');
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess(true);
    setError(false);
    navigate('/');
  }

  return (
    <div className='container'>
      {success && <h1 data-testid="success-header">Login successful</h1>}
      {error && (
        <h1 data-testid="error-header">
          Error: Please select the correct username.
        </h1>
      )}
      <h1 className='text-center mt-3'>Select your username</h1>
      <form onSubmit={handleSubmit}>
        <select
          name='users'
          onChange={handleChange}
          data-testid="users-select"
          className="form-select mt-3"
          defaultValue={optionSelected}
          aria-label="Default select example"
        >
          <option value='none' key='none'></option>
          {userIds.map(id => {
            return(
              <>
                <option value={id} key={id}>{users[id].name}</option>
              </>
            );
          })};
        </select>

        <button data-testid="submit-button" type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  const users = state.users;

  return {
    userIds: Object.keys(users),
    users
  };
};

export default connect(mapStateToProps)(LoginPage);
