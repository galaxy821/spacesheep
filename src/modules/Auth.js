import Auth from '../api/Auth';

export const loginWithGoogle = async () => {
  const response = await Auth.post('/login/auth/google')
    .then(function (response) {
      // eslint-disable-next-line no-console
      console.log(response);
    })
    .catch(function (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};
