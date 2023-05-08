import LoginGuideScreen from '../screens/auth/LoginGuideScreen';
import PropTypes from 'prop-types';
import { getToken } from '../modules/Token';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AuthRoutes } from './routes';

const AuthRequired = ({ children }) => {
  const [data, setData] = useState(async () => {
    return await getToken();
  });

  if (data === null) {
    return children;
  } else {
    return <LoginGuideScreen />;
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
