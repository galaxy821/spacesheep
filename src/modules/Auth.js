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

export const signUpWithEmail = async email => {
  const response = await Auth.post('/login/signup/email', {
    email,
  })
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(response);
      if (response.status == 200) {
        alert('이메일 인증메일 전송 성공...!');
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

export const getUserStatus = async email => {
  const response = await Auth.get('/getUserStatus', {
    email,
  })
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(response);
      if (response.status == 200) {
        alert('이메일 인증메일 확인...!');
      } else if (response.status == 401) {
        return response.status;
      }
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return 500;
    });
};
