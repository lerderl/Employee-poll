import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { setAuthedUser } from '../actions/authedUser';

const LoginPage = ({ userIds, users, dispatch }) => {
  const [optionSelected, setOptionSelected] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = e => {
    e.preventDefault();
    setOptionSelected(e.target.value);

    if (e.target.value !== '' && e.target.value !== 'none') {
      dispatch(setAuthedUser(e.target.value));
      navigate(location?.state?.location);
    } else if (e.target.value === 'none') {
      dispatch(setAuthedUser(''));
      navigate('/login');
    };
  };

  return (
    <div className='container'>
      <h1>Input your login details</h1>
      <select
        name='users'
        className="form-select"
        onChange={handleChange}
        defaultValue={optionSelected}
        aria-label="Default select example"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export default LoginPage;
