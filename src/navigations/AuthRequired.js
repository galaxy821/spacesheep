import LoginGuideScreen from '../screens/auth/LoginGuideScreen';
import PropTypes from 'prop-types';

const AuthRequired = ({ children }) => {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return children;
  } else {
    return <LoginGuideScreen />;
  }
};

export default AuthRequired;
