import LoginGuideScreen from '../screens/LoginGuideScreen';
import PropTypes from 'prop-types';

const AuthRequired = ({ children }) => {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return children;
  } else {
    return <LoginGuideScreen />;
  }
};

export default AuthRequired;
