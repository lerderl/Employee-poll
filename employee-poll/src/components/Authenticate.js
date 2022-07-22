import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const Authenticate = props => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const status = props.status;

    if (status) {
      navigate('/login', { state: { location: location.pathname } })
    };
  }, [props.status, location?.pathname, navigate]);
};

const mapStateToProps = ({ authedUser }) => {
  return {
    status: authedUser === null ? true : false
  };
};

export default connect(mapStateToProps)(Authenticate);
