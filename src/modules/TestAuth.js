import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {
  makeRedirectUri,
  useAuthRequest,
  ResponseType,
} from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const clientId =
  '1073161759177-vdi70ke81l4m125qv1ovcp77q25uflds.apps.googleusercontent.com';
const redirectUri = makeRedirectUri({
  scheme: 'com.galaxy821.spacesheep',
});
const discovery = {
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
  tokenEndpoint: 'https://oauth2.googleapis.com/token',
  revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
};

export default function GoogleAuth() {
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId,
      redirectUri,
      scopes: ['openid', 'profile'],
      responseType: ResponseType.Token,
      usePKCE: false,
      extraParams: {
        access_type: 'offline',
      },
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.params.access_token);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken]);

  async function fetchUserInfo() {
    let response = await fetch('https://www.googleapis.com/oauth/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    let userInfo = await response.json();
    setUser(userInfo);
    console.log(userInfo);
  }

  return (
    <TouchableOpacity
      disabled={!request}
      onPress={() => {
        promptAsync({ useProxy: false });
      }}
    >
      <Text>login with google</Text>
    </TouchableOpacity>
  );
}
