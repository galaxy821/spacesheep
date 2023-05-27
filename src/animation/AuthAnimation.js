import { Animated, Easing } from 'react-native';

const fadeIn = (fadeAnim, timming) => {
  return Animated.timing(fadeAnim, {
    toValue: 1,
    duration: timming,
    // easing: Easing.inOut(Easing.quad),
    useNativeDriver: true,
  });
};

const fadeOut = (fadeAnim, timming) => {
  return Animated.timing(fadeAnim, {
    toValue: 0,
    duration: timming,
    // easing: Easing.inOut(Easing.quad),
    useNativeDriver: true,
  });
};

const fadeOutWithCallback = (fadeAnim, timming, callback) => {
  return Animated.timing(fadeAnim, {
    toValue: 0,
    duration: timming,
    easing: Easing.inOut(Easing.quad),
    useNativeDriver: true,
  }).start(callback);
};

export const AuthAnimation = {
  fadeIn,
  fadeOut,
  fadeOutWithCallback,
};
