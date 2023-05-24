import axios from 'axios';

/**
 * Bookmark axios 인스턴스 생성
 * @param {string} token 사용자 토큰
 * @returns {AxiosInstance}
 */
const Bookmark = token =>
  axios.create({
    baseURL: 'https://spacesheep.co.kr',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

/**
 * 사용자 북마크 정보 요청 (GET /bookmark)
 * @param {string} token 사용자 토큰
 * @returns {AxiosPromise}
 */
export const getBookmarkInfo = token => Bookmark(token).get('/bookmark');

/**
 * 사용자 북마크 추가 요청 (POST /bookmark)
 * @param {string} token 사용자 토큰
 * @param {string} spaceId space id
 * @returns {AxiosPromise}
 */
export const postBookmarkInfo = (token, spaceId) =>
  Bookmark(token).post('/bookmark', { spaceId });

/**
 * 사용자 북마크 삭제 요청 (DELETE /bookmark)
 * @param {string} token 사용자 토큰
 * @param {string} spaceId space id
 * @returns {AxiosPromise}
 */
export const deleteBookmarkInfo = (token, spaceId) =>
  Bookmark(token).delete('/bookmark', { spaceId });
