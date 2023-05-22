import {
  authEmailVerified,
  authGetUserStatus,
  authSetNickname,
  authSignUpWithEmail,
} from '../api/Auth';
import { getToken } from './Token';
import { setToken } from './Token';

// Google Oauth2.0
// export const loginWithGoogle = async () => {
//   await Auth.post('/login/auth/google')
//     .then(function (response) {
//       // eslint-disable-next-line no-console
//       console.log(response);
//     })
//     .catch(function (error) {
//       // eslint-disable-next-line no-console
//       console.log(error);
//     });
// };

/**
 * 인증할 이메일 전송 요청 (POST /auth/email-verified)
 * @param {string} email
 * @returns {number} 200 : 이메일 전송 성공, 401 : 이미 가입된 이메일, 500 : 기타 오류
 */
export const sendEmailForVerified = async email => {
  await authEmailVerified(email)
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(`F/sendEmailForVerified : ${response}`);

      if (response.status == 200) {
        // eslint-disable-next-line no-console
        console.log('F/sendEmailForVerified : 이메일 전송 성공!');

        return response.status;
      } else if (response.status == 401) {
        // eslint-disable-next-line no-console
        console.log('E/sendEmailForVerified : 이미 가입된 이메일입니다.');

        return response.status;
      }
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(`E/sendEmailForVerified : ${error}`);

      return 500;
    });
};

/**
 * 이메일 인증 상태 확인 요청 (GET /auth/getUserStatus)
 * @param {string} email
 * @returns {number} 200 : 이메일 인증 완료, 401 : 이메일 인증 실패, 500 : 기타 오류
 */
export const getUserStatus = async email => {
  await authGetUserStatus(email)
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(`F/getUserStatus : ${response}`);

      if (response.status == 200) {
        // eslint-disable-next-line no-console
        console.log('F/getUserStatus : 이메일 인증 완료!');

        return response.status;
      } else if (response.status == 401) {
        // eslint-disable-next-line no-console
        console.log('E/getUserStatus : 이메일 인증 실패');

        return response.status;
      }
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(`E/getUserStatus : ${error}`);

      return 500;
    });
};

/**
 * email, password로 회원가입 요청 (POST /auth/signup)
 * @param {string} email 사용자 이메일
 * @param {string} password  사용자 비밀번호
 * @returns {number} 200 : 회원가입 성공, 401 : 회원가입 실패, 500 : 기타 오류
 */
export const signUpWithEmail = async (email, password) => {
  await authSignUpWithEmail(email, password)
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(`F/signUpWithEmail : ${response}`);

      if (response.status == 200) {
        // eslint-disable-next-line no-console
        console.log('F/signUpWithEmail : 회원가입 성공!');

        if (response.accessToken && response.refreshToken) {
          setToken(response.accessToken, response.refreshToken);

          return response.status;
        } else {
          // eslint-disable-next-line no-console
          console.log('E/signUpWithEmail : token is null');

          return 500;
        }
      } else if (response.status == 401) {
        // eslint-disable-next-line no-console
        console.log('E/signUpWithEmail : 회원가입 실패');

        return response.status;
      }
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(`E/signUpWithEmail : ${error}`);

      return 500;
    });
};

/**
 * nickname 설정 요청 (PATCH /auth/setNickname)
 * @param {string} nickname
 * @returns {number} 200 : 닉네임 설정 성공, 401 : 닉네임 설정 실패, 500 : 기타 오류
 */
export const setNickname = async nickname => {
  const token = await getToken();
  if (token !== null) {
    await authSetNickname(token, nickname)
      .then(function (response) {
        // eslint-disable-next-line no-console
        console.log(`F/setNickname : ${response}`);
        if (response.status == 200) {
          // eslint-disable-next-line no-console
          console.log('F/setNickname : 닉네임 설정 성공!');

          return response.status;
        } else if (response.status == 401) {
          // eslint-disable-next-line no-console
          console.log('E/setNickname : 닉네임 설정 실패');

          return response.status;
        }
      })
      .catch(function (error) {
        // eslint-disable-next-line no-console
        console.log(`E/setNickname : ${error}`);

        return 500;
      });
  } else {
    // eslint-disable-next-line no-console
    console.log('E/setNickname : token is null');

    return 500;
  }
};
