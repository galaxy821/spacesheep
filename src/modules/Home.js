import { homeApi } from '../api/Home';

/**
 * Home Banner Item 요청 (GET /home/bannerItem)
 * @returns {Object} 정상 응답 : Banner Item List, 실패 : null
 */
export const getBannerItem = async () => {
  await homeApi
    .getHomeBannerItem()
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(`F/getBannerItem : ${response}`);

      if (response.status == 200) {
        // eslint-disable-next-line no-console
        console.log('F/getBannerItem :배너 아이템 받기 성공!');

        return response.data;
      } else if (response.status == 401) {
        // eslint-disable-next-line no-console
        console.log('E/getBannerItem : 배너 아이템 받기 실패');

        return null;
      }
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(`E/getBannerItem : ${error}`);

      return null;
    });
};

/**
 * Home Interest Subject Item 요청 (GET /home/popularItem)
 * @returns {Object} 정상 응답 : Interest Subject Item List, 실패 : null
 */
export const getInterestSubjectItem = async () => {
  await homeApi
    .getHomeInterestSubjectItem()
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(`F/getInterestSubjectItem : ${response}`);

      if (response.status == 200) {
        // eslint-disable-next-line no-console
        console.log('F/getInterestSubjectItem : 관심사 아이템 받기 성공!');

        return response.data;
      } else if (response.status == 401) {
        // eslint-disable-next-line no-console
        console.log('E/getInterestSubjectItem : 관심사 아이템 받기 실패');

        return null;
      }
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(`E/getInterestSubjectItem : ${error}`);

      return null;
    });
};

/**
 * Home Spaces Info 요청 (GET /home/spacesInfo)
 * @returns {Object} 정상 응답 : Spaces Info List, 실패 : null
 */
export const getSpacesInfo = async () => {
  await homeApi
    .getHomeSpacesInfo()
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(`F/getSpacesInfo : ${response}`);

      if (response.status == 200) {
        // eslint-disable-next-line no-console
        console.log('F/getSpacesInfo : Space List 받기 성공!');

        return response.data;
      } else if (response.status == 401) {
        // eslint-disable-next-line no-console
        console.log('E/getSpacesInfo : Space List 받기 실패');

        return null;
      }
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(`E/getSpacesInfo : ${error}`);

      return null;
    });
};

/**
 * Home Spaces Info 요청 (GET /home/spacesInfo {params : subject})
 * @param {string} subject 관심사
 * @returns {Object} 정상 응답 : Spaces Info List, 실패 : null
 */
export const getSpacesInfoForInterest = async subject => {
  await homeApi
    .getHomeSpacesInfoForInterestSubject(subject)
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(`F/getSpacesInfoForInterest : ${response}`);

      if (response.status == 200) {
        // eslint-disable-next-line no-console
        console.log('F/getSpacesInfoForInterest : Space List 받기 성공!');

        return response.data;
      } else if (response.status == 401) {
        // eslint-disable-next-line no-console
        console.log('E/getSpacesInfoForInterest : Space List 받기 실패');

        return null;
      }
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(`E/getSpacesInfoForInterest : ${error}`);

      return null;
    });
};
