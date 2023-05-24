import axios from 'axios';

/**
 * Search axios 인스턴스 생성
 * @return {AxiosInstance}
 */
const Search = axios.create({
  baseURL: 'https://spacesheep.co.kr',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * 검색 키워드에 따른 space 리스트 요청 (GET /search/spacesInfo)
 * @param {string} keyword 검색 키워드
 * @returns {AxiosPromise}
 */
export const getSearchSpacesInfo = keyword =>
  Search.get('/search/spacesInfo', { params: { keyword } });

/**
 * 검색 입력 값에 따른 keyword 리스트 요청 (GET /search/keyword)
 * @param {string} input 검색 입력 값
 * @returns
 */
export const getSearchKeyword = input =>
  Search.get('/search/keyword', { params: { input } });
