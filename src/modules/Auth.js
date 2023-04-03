import Auth from '../api/Auth';

export const loginWithGoogle = async () => {
  const response = await Auth.post('/login/auth/google')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
