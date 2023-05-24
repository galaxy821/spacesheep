import axios from 'axios';
/**
 * AUTH axios 인스턴스 생성
 * @returns {AxiosInstance}
 */
const Auth = axios.create({
  baseURL: 'https://spacesheep.co.kr',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * AUTH axios 인스턴스 생성 (토큰 포함)
 * @param {string} token 사용자 토큰
 * @returns {AxiosInstance}
 */
const AuthWithToken = token => {
  return axios.create({
    baseURL: 'https://spacesheep.co.kr',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

/**
 * 인증할 이메일 전송 요청 (POST /auth/email-verified)
 * @param {string} email 이메일
 * @returns {AxiosPromise}
 */
export const authEmailVerified = email =>
  Auth.get('/auth/email-verified', { email });

/**
 * 이메일 인증 상태 확인 요청 (GET /auth/getUserStatus)
 * @param {string} email 이메일
 * @returns {AxiosPromise}
 */
export const authGetUserStatus = email =>
  Auth.get('/auth/getUserStatus', { email });

/**
 * email, password로 회원가입 요청 (POST /auth/signup)
 * @param {string} email 이메일
 * @param {string} password 비밀번호
 * @returns {AxiosPromise}
 */
export const authSignUpWithEmail = (email, password) =>
  Auth.post('/auth/signup', { email, password });

/**
 * email, password로 로인 (POST /auth/signin)
 * @param {string} email 이메일
 * @param {string} password 비밀번호
 * @returns {AxiosPromise}
 */
export const authSignIn = (email, password) =>
  Auth.post('/auth/signin', { email, password });

/**
 * nickname 설정 요청 (POST /auth/setNickname)
 * @param {string} token 사용자 토큰
 * @param {string} nickname 닉네임
 * @returns {AxiosPromise}
 */
export const authSetNickname = (token, nickname) =>
  AuthWithToken(token).post('/auth/setNickname', { nickname });

/**
 * 토큰 인증 요청 (GET /auth)
 * @param {string} token 사용자 토큰
 * @returns {AxiosPromise}
 */
export const authVerifiedToken = token => AuthWithToken(token).get('/auth');

/**
 * 토큰 갱신 요청 (GET /auth/refresh-token)
 * @param {string} token 사용자 토큰
 * @returns {AxiosPromise}
 */
export const authRefreshToken = token =>
  AuthWithToken(token).get('/auth/refresh-token');

/**
 * 사용자 프로필 업데이트 요청 (PATCH /auth/update)
 * @param {string} token 사용자 토큰
 * @param {object} profile 사용자 프로필 정보
 * @returns {AxiosPromise}
 */
export const authUpdate = (token, profile) =>
  AuthWithToken(token).patch('/auth/update', { profile });
