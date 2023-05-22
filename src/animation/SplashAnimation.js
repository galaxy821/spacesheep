import { Animated, Easing } from 'react-native';

const fadeIn = (fadeAnim, setShowTitle) => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.back(),
    delay: 1500,
  }).start(() => setShowTitle(true));
};

const fadeOut = fadeOutAnim => {
  Animated.timing(fadeOutAnim, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
    esing: Easing.back(),
    delay: 4270,
  }).start();
};

export const SplashAnimation = {
  fadeIn,
  fadeOut,
};

export const fadeOutSplashScreen = (fadeAnim, setShowSplash) => {
  Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  }).start(() => setShowSplash(false));
};
