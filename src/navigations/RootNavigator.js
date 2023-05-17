import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { KoddiUDOnGothic } from '../styles/DefaultStyle';
import SplashScreenForSpacesheep from '../screens/SplashScreen';
import { Animated, StyleSheet, View } from 'react-native';
import { getToken } from '../modules/Token';
import AuthModalNavigator from './AuthNavigator';
import { authStore } from '../store/Auth';
import { RecoilRoot, useRecoilState } from 'recoil';

const RootNavigator = () => {
  const [isReady, setIsReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = new Animated.Value(1);

  const [accessToken, setAccessToken] = useRecoilState(authStore);

  const getFonts = async () => {
    await Font.loadAsync(KoddiUDOnGothic);
  };

  const loadToken = async () => {
    const token = await getToken();
    if (token) {
      setAccessToken(token);
    }
  };

  const fadeOutAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setShowSplash(false));
  };

  useEffect(() => {
    (async () => {
      try {
        await getFonts();
        await loadToken();
        await new Promise(resolve => setTimeout(resolve, 4500));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      } finally {
        setIsReady(true);
      }
    })();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isReady) {
      fadeOutAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  if (!isReady) {
    return (
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <SplashScreenForSpacesheep />
      </Animated.View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {showSplash && (
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            opacity: fadeAnim,
            zIndex: 1,
          }}
        >
          <SplashScreenForSpacesheep />
        </Animated.View>
      )}
      {isReady && (
        <NavigationContainer>
          {/* <AppNavigator /> */}
          <AuthModalNavigator />
        </NavigationContainer>
      )}
    </View>
  );
};

export default RootNavigator;
