import LoginGuideScreen from '../screens/LoginGuideScreen';
import PropTypes from 'prop-types';

const AuthRequired = ({ component }) => {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return component;
  } else {
    return <LoginGuideScreen />;
  }
};

AuthRequired.propTypes = {
  component: PropTypes.element,
};

export default AuthRequired;
