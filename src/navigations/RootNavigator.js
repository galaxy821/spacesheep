import { useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useSetRecoilState } from 'recoil';
import { getToken } from '../modules/Token';
import { authStoreSelector } from '../store/Auth';
import SplashScreenForSpacesheep from '../screens/SplashScreen';
import { getKoddiFonts } from '../assets/fonts/KoddiUOnGothic';
import { fadeOutSplashScreen } from '../animation/SplashAnimation';
import AppModalNavigator from './AppModalNavigator';

/**
 * 최상위 navigator
 */
const RootNavigator = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  // const [accessToken, setAccessToken] = useRecoilState(authStore);
  const setAccessToken = useSetRecoilState(authStoreSelector);
  const fadeAnim = new Animated.Value(1);

  /**
   * 앱 실행 시 필요한 데이터를 불러오는 함수
   */
  const loadContent = async () => {
    try {
      await getKoddiFonts();
      const userTokens = await getToken();
      if (userTokens != null) {
        setAccessToken(userTokens.accessToken, userTokens.refreshToken);
      }

      await new Promise(resolve => setTimeout(resolve, 4500));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`JSX/RootNavigator : ${error}`);
    } finally {
      setIsLoaded(true);
      fadeOutSplashScreen(fadeAnim, setShowSplash);
    }
  };

  useEffect(() => {
    loadContent();
    //eslint-disable-next-line
  }, []);

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
      {isLoaded && (
        <NavigationContainer>
          <AppModalNavigator />
        </NavigationContainer>
      )}
    </View>
  );
};

export default RootNavigator;
