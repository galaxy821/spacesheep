import axios from 'axios';

/**
 * Home axios 인스턴스 생성
 * @returns {AxiosInstance}
 */
const Home = axios.create({
  baseURL: 'https://spacesheep.co.kr',
  headers: {
    'Content-Type': 'application/json',
  },
});

/*
const HomeWithToken = token => {
  return axios.create({
    baseURL: 'https://spacesheep.co.kr',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
*/

/**
 * 홈 화면 배너 아이템 요청 (GET /home/bannerItem)
 * @returns {AxiosPromise}
 */
export const getHomeBannerItem = () => Home.get('/home/bannerItem');

/**
 * 홈 화면 관심 주제 리스트 요청 (GET /home/popularItem)
 * @returns {AxiosPromise}
 */
export const getHomeInterestSubjectItem = () => Home.get('/home/popularItem');

/**
 * 홈 화면 전체 인기 space 리스트 요청 (GET /home/spaceItem)
 * @returns {AxiosPromise}
 */
export const getHomeSpacesInfo = () => Home.get('/home/spacesInfo');

/**
 * Space 주제에 따른 space 리스트 요청 (GET /home/spacesInfo)
 * @param {string} subject space 주체
 * @returns {AxiosPromise}
 */
export const getHomeSpacesInfoForInterestSubject = subject =>
  Home.get('/home/spacesInfo', { params: { subject } });

/**
 * 공지 사항 리스트 요청 (GET /home/notice)
 * @returns {AxiosPromise}
 */
export const getHomeNotice = () => Home.post('/home/notice');
