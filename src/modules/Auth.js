import Auth, { getUpdateAuth } from '../api/Auth';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { getToken } from './Token';

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

export const sendEmailForAuth = async email => {
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

export const signUpForUser = async (email, password, nickname) => {
  const response = await Auth.post('/auth/signup', {
    email,
    password,
    nickname,
  })
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(response);
      if (response.status == 200) {
        alert('회원가입 성공...!');
        // 회원가입 성공 시 토큰 돌려 받음...! -> 이후 계정관린된 부분은 토큰을 담아서 요청할 예정
        // if (response && response.accessToken && response.refreshToken) {
        //   await AsyncStoragegerage.setItem('accessToken', response.accessToken);
        //   await AsyncStorage.setItem('refreshToken', response.refreshToken);
        //   navigation.navigate('NextScreen'); // 여기서 'NextScreen'을 다음 화면의 이름으로 바꿔주세요.
        // } else {
        //   Alert.alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        // }
      } else if (response.status == 401) {
        alert('오류....?가 있을 수 있나..?');
        return response.status;
      }
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return 500;
    });
};

export const setNickname = async nickname => {
  const token = await getToken();
  if (token !== null) {
    const response = await getUpdateAuth(token)
      .post('/auth/setNickname', {
        nickname,
      })
      .then(function (response) {
        // eslint-disable-next-line no-console
        console.log(response);
        if (response.status == 200) {
          alert('닉네임 설정 성공...!');
        } else if (response.status == 401) {
          alert('닉네임 설정 오류');
          return response.status;
        }
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return 500;
      });
  } else {
    // 잘못된 요청
    alert('토큰이 없습니다.');
  }
};
