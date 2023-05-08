import axios from 'axios';

const Auth = axios.create({
  baseURL: 'https://spacesheep.co.kr',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUpdateAuth = token => {
  return axios.create({
    baseURL: 'https://spacesheep.co.kr',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export default Auth;
