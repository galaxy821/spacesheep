import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import AppNavigator from './AppNavigator';
import * as Font from 'expo-font';

const RootNavigator = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        const getFonts = async () => {
          await Font.loadAsync({
            'Roboto-Regular': require('../../assets/fonts/KoddiUDOnGothic-Bold.otf'),
            'Roboto-Medium': require('../../assets/fonts/KoddiUDOnGothic-ExtraBold.otf'),
            'Roboto-Bold': require('../../assets/fonts/KoddiUDOnGothic-Regular.otf'),
          });
        };
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
