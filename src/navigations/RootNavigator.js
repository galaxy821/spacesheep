import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import ModalNavigator from './AuthNavigator';
import { KoddiUDOnGothic } from '../styles/DefaultStyle';
import { useCallback } from 'react';
import SplashScreenForSpacesheep from '../screens/SplashScreen';

const RootNavigator = () => {
  const [isReady, setIsReady] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync(KoddiUDOnGothic);
  };

  useEffect(() => {
    (async () => {
      await getFonts();
      try {
        // await SplashScreen.preventAutoHideAsync();
        //i want this code to stop for 3 seconds so that the splashscreen can be seen
        await new Promise(resolve => setTimeout(resolve, 4000));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      } finally {
        setIsReady(true);
        // await SplashScreen.hideAsync();
      }
    })();
  }, []);

  const onReady = useCallback(async () => {
    if (isReady) {
      // await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return <SplashScreenForSpacesheep />;
  }

  return (
    <NavigationContainer onReady={onReady}>
      <ModalNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
