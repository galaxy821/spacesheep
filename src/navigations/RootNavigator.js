import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigator from './AppNavigator';
import * as Font from 'expo-font';

const RootNavigator = () => {
  const [isReady, setIsReady] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
      'KoddiUDOnGothic-Bold': require('../../assets/fonts/KoddiUDOnGothic-Bold.otf'),
      'KoddiUDOnGothic-ExtraBold': require('../../assets/fonts/KoddiUDOnGothic-ExtraBold.otf'),
      'KoddiUDOnGothic-Regular': require('../../assets/fonts/KoddiUDOnGothic-Regular.otf'),
    });
  };

  useEffect(() => {
    (async () => {
      try {
        await getFonts();
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  const onReady = async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  };

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onReady}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
