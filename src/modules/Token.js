import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  let token;
  try {
    token = await AsyncStorage.getItem('@token');
    console.log('get token', token);
    return token;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('error', e + 'getToken');
    return null;
  }
};

export const setToken = async token => {
  // with try-catch statement
  try {
    await AsyncStorage.setItem('@token', token);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('error', e + 'setToken');
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.clear();
    // eslint-disable-next-line no-console
    console.log('Token removed successfully');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error removing token:', error);
  }
};
