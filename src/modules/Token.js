import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  try {
    let accessToken = await AsyncStorage.getItem('@ACCESS_TOKEN');
    let refreshToken = await AsyncStorage.getItem('@REFRESH_TOKEN');

    if (!accessToken || !refreshToken) return null;

    return { accessToken, refreshToken };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('error', e + 'getToken');
    return null;
  }
};

export const setToken = async (accessToken, refreshToken) => {
  try {
    await AsyncStorage.setItem('@ACCESS_TOKEN', accessToken);
    await AsyncStorage.setItem('@REFRESH_TOKEN', refreshToken);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('error', e + 'setToken');
  }
};

export const removeToken = async () => {
  try {
    // await AsyncStorage.clear();
    await AsyncStorage.removeItem('@ACCESS_TOKEN');
    await AsyncStorage.removeItem('@REFRESH_TOKEN');

    // eslint-disable-next-line no-console
    console.log('Token removed successfully');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error removing token:', error);
  }
};
