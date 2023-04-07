import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import ModalNavigator from './AuthNavigator';
import { KoddiUDOnGothic } from '../styles/DefaultStyle';
import SplashScreenForSpacesheep from '../screens/SplashScreen';
import { Reanimated, Easing } from 'react-native-reanimated';

const { Value, timing, useCode, set, cond, eq, interpolate, Extrapolate } =
  Reanimated;

const RootNavigator = () => {
  const [isReady, setIsReady] = useState(false);
  const animation = new Value(0);

  const getFonts = async () => {
    await Font.loadAsync(KoddiUDOnGothic);
  };

  useEffect(() => {
    (async () => {
      await getFonts();
      try {
        await new Promise(resolve => setTimeout(resolve, 4000));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  useCode(
    () =>
      cond(
        eq(isReady, true),
        set(
          animation,
          timing({
            from: 0,
            to: 1,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
          })
        )
      ),
    [isReady]
  );

  const opacity = interpolate(animation, {
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  if (!isReady) {
    return (
      <>
        <SplashScreenForSpacesheep />
        <Reanimated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'white',
            opacity,
          }}
        />
      </>
    );
  }

  return (
    <NavigationContainer>
      <ModalNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
