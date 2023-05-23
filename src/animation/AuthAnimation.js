import { Animated, Easing } from 'react-native';

const fadeIn = (fadeAnim, timming) => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: timming,
    easing: Easing.inOut(Easing.quad),
    useNativeDriver: true,
  }).start();
};

const fadeOut = (fadeAnim, timming) => {
  Animated.timing(fadeAnim, {
    toValue: 0,
    duration: timming,
    easing: Easing.inOut(Easing.quad),
    useNativeDriver: true,
  }).start();
};

const fadeOutWithCallback = (fadeAnim, timming, callback) => {
  Animated.timing(fadeAnim, {
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
