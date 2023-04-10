import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  let token;
  try {
    token = await AsyncStorage.getItem('token');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('error', e + 'getToken');
  }
  if (token === null) {
    return false;
  }
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const setToken = async token => {
  // with try-catch statement
  try {
    await AsyncStorage.setItem('token', token);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('error', e + 'setToken');
  }
};
