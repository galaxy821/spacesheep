import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 토큰 가져오기
 * @returns {object} { accessToken, refreshToken } : 토큰이 존재하면 토큰 객체를 반환, 토큰이 존재하지 않으면 null 반환
 */
export const getToken = async () => {
  try {
    let accessToken = await AsyncStorage.getItem('@ACCESS_TOKEN');
    let refreshToken = await AsyncStorage.getItem('@REFRESH_TOKEN');

    if (!accessToken || !refreshToken) return null;

    return { accessToken, refreshToken };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`F/getToken : ${error}`);

    return null;
  }
};

/**
 * 토큰 저장하기 (로그인/회원가입/토큰 재발급)
 * @param {string} accessToken
 * @param {string} refreshToken
 * @returns {void}
 */
export const setToken = async (accessToken, refreshToken) => {
  try {
    await AsyncStorage.setItem('@ACCESS_TOKEN', accessToken);
    await AsyncStorage.setItem('@REFRESH_TOKEN', refreshToken);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`F/serToken : ${error}`);
  }
};

/**
 * 토큰 삭제하기 (로그아웃)
 * @returns {void}
 */
export const removeToken = async () => {
  try {
    // await AsyncStorage.clear();
    await AsyncStorage.removeItem('@ACCESS_TOKEN');
    await AsyncStorage.removeItem('@REFRESH_TOKEN');

    // eslint-disable-next-line no-console
    console.log('F/removeToken :Token removed successfully');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`F/removeToken : ${error}`);
  }
};
