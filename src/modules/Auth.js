import Auth from '../api/Auth';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

export const loginWithGoogle = async () => {
  const response = await Auth.post('/login/auth/google')
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(response);
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export const signUpWithEmail = async (email, password) => {
  const response = await Auth.post('/login/signup', {
    email,
    password,
  })
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(response);
      if (response.status == 200) {
        alert('회원가입이 완료되었습니다.');
        try {
          // 토큰 저장
          AsyncStorage.setItem('token', response.data.token);
          return response.status;
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(error);
          return 500;
        }
      } else if (response.status == 401) {
        alert('이미 가입된 이메일입니다.');
        return response.status;
      }
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return 500;
    });
};
