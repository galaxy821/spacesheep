import * as React from 'react';
import * as Google from 'expo-auth-session/providers/google';
// import {
//   makeRedirectUri,
//   useAuthRequest,
//   ResponseType,
// } from 'expo-auth-session';
import { View, Text, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

// const discovery = {
//   authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
//   tokenEndpoint: 'https://www.googleapis.com/oauth2/v4/token',
//   userinfoEndpoint: 'https://www.googleapis.com/oauth2/v3/userinfo',
// };

export default function GoogleAuth() {
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      '1073161759177-vdi70ke81l4m125qv1ovcp77q25uflds.apps.googleusercontent.com',
    iosClientId:
      '1073161759177-uo87o9c1jjcsp1p2gl9dknt109g45g2v.apps.googleusercontent.com',
    androidClientId:
      '1073161759177-uo87o9c1jjcsp1p2gl9dknt109g45g2v.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, accessToken]);

  async function fetchUserInfo() {
    let response = await fetch('https://www.googleapis.com/oauth/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    let userInfo = await response.json();
    setUser(userInfo);
    // eslint-disable-next-line no-console
    console.log(userInfo);
  }

  // const ShowUserInfo = () => {
  //     if(user){
  //         return (
  //             <View>
  //                 <Text>{user.name}</Text>
  //                 <Text>{user.email}</Text>
  //                 <Image source={{uri: user.picture}} style={{width: 100, height: 100}}/>
  //             </View>
  //         )
  //     }
  //     return null;

  // }

  //   const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
  //     // expoClientId :'1073161759177-uo87o9c1jjcsp1p2gl9dknt109g45g2v.apps.googleusercontent.com',
  //     clientId:
  //       '1073161759177-uo87o9c1jjcsp1p2gl9dknt109g45g2v.apps.googleusercontent.com',
  //     responseType: ResponseType.Token,
  //     // redirectUri: {
  //     //   // url: 'https://auth.expo.io/galaxy821/spacesheep',
  //     //   native:
  //     //     'com.googleusercontent.apps.1073161759177-uo87o9c1jjcsp1p2gl9dknt109g45g2v:/oauthredirect',
  //     // },

  //     redirectUri: makeRedirectUri({
  //       native:
  //         'com.googleusercontent.apps.1073161759177-uo87o9c1jjcsp1p2gl9dknt109g45g2v:/oauthredirect',
  //       //   useProxy: false,
  //     }),
  //     scopes: ['openid', 'profile', 'email'],
  //     discovery,
  //   });

  //   React.useEffect(() => {
  //     if (response?.type === 'success') {
  //       const { id_token } = response;
  //       // eslint-disable-next-line no-console
  //       console.log(id_token);

  //       const { access_token } = response.params;
  //       console.log('Access Token:', access_token);
  //     }
  //   }, [response]);

  //   const loginWithGoogle = async () => {
  //     const response = await promptAsync()
  //       .then(function (response) {
  //         // eslint-disable-next-line no-console
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         // eslint-disable-next-line no-console
  //         console.log(error);
  //       });
  //   };

  return (
    <View>
      <TouchableOpacity
      //   disabled={!request}
      //   onPress={() => {
      //     promptAsync({
      //       useProxy: false,
      //       projectNameForProxy: '@galaxy821/spacesheep',
      //     });
      //   }}
      >
        <Text>login with google</Text>
      </TouchableOpacity>
    </View>
  );
}
