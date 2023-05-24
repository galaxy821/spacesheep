import { searchApi } from '../api/Search';

/**
 * 검색 키워드에 따른 space 리스트 요청 (GET /search/spacesInfo)
 * @param {string} keyword 검색 키워드
 * @returns {Object} 정상 응답 : Spaces Info List, 실패 : null
 */
export const getSearchSpacesInfo = async keyword => {
  await searchApi
    .getSearchSpacesInfo(keyword)
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(`F/getSearchSpacesInfo : ${response}`);

      if (response.status == 200) {
        // eslint-disable-next-line no-console
        console.log('F/getSearchSpacesInfo : 검색 결과 받기 성공!');

        return response.data;
      } else if (response.status == 401) {
        // eslint-disable-next-line no-console
        console.log('E/getSearchSpacesInfo : 검색 결과 받기 실패');

        return null;
      }
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(`E/getSearchSpacesInfo : ${error}`);

      return null;
    });
};

/**
 * 검색 입력 값에 따른 keyword 리스트 요청 (GET /search/keyword)
 * @param {string} input 검색 입력 값
 * @returns {Object} 정상 응답 : keyword List, 실패 : null
 */
export const getSearchKeyword = async input => {
  await searchApi
    .getSearchKeyword(input)
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(`F/getSearchKeyword : ${response}`);

      if (response.status == 200) {
        // eslint-disable-next-line no-console
        console.log('F/getSearchKeyword : 검색 결과 받기 성공!');

        return response.data;
      } else if (response.status == 401) {
        // eslint-disable-next-line no-console
        console.log('E/getSearchKeyword : 검색 결과 받기 실패');

        return null;
      }
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(`E/getSearchKeyword : ${error}`);

      return null;
    });
};
