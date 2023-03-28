import { NavigationContainer } from '@react-navigation/native';
import BottomBarRoute from './BottomBarRoute';
// import { useEffect, useState } from 'react';
// import * as SplashScreen from 'expo-splash-screen';

const Navigation = () => {
  // const [isReady, setIsReady] = useState(false);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await SplashScreen.preventAutoHideAsync();
  //     } catch (e) {
  //       // eslint-disable-next-line no-console
  //       console.log(e);
  //     } finally {
  //       // setIsReady(true);
  //     }
  //   })();
  // }, []);

  // const onReady = async () => {
  //   if (isReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // };

  // if (!isReady) {
  //   return null;
  // }

  return (
    <NavigationContainer>
      <BottomBarRoute />
    </NavigationContainer>
  );
};

export default Navigation;
