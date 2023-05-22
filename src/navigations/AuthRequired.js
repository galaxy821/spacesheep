import LoginGuideScreen from '../screens/auth/LoginGuideScreen';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import { authStoreSelector } from '../store/Auth';
// import { useRecoilValue } from '../../node_modules/recoil/index.d';
// import { authStore } from '../store/Auth';

const AuthRequired = ({ children }) => {
  const token = useRecoilValue(authStoreSelector);
  // const token = null;
  if (token.accessToken === null || token.refreshToken === null) {
    // eslint-disable-next-line
    console.log('JSX/AuthRequired : token is null');
    return <LoginGuideScreen />;
  } else {
    // eslint-disable-next-line
    console.log(
      'JSX/AuthRequired : authRequired',
      token,
      token.accessToken,
      token.refreshToken
    );
    return children;
  }
};

AuthRequired.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthRequired;

// const navigation = useNavigation();
// useEffect(() => {
//   const checkLoginStatus = async () => {
//     const token = await AsyncStorage.getItem('@token');
//     if (!token) {
//       // 토큰이 없으면 로그인 페이지로 이동
//       navigation.dispatch .navigate(AuthRoutes.LOGIN_GUIDE);
//     }
//   };

//   checkLoginStatus();
// }, []);

// getToken().then(isLoggedIn => {
//   if (isLoggedIn !== null) {
//     return children;
//   } else {
//     return <LoginGuideScreen />;
//   }
// });
// return children;
