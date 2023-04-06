import { Animated, Easing } from 'react-native';

const fadeIn = fadeAnim => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 300,
    easing: Easing.inOut(Easing.quad),
    useNativeDriver: true,
  }).start();
};

const fadeOut = (fadeAnim, setShowAuthModal) => {
  Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 300,
    easing: Easing.inOut(Easing.quad),
    useNativeDriver: true,
  }).start(() => setShowAuthModal(false));
};

const slideIn = slideAnim => {
  Animated.timing(slideAnim, {
    toValue: 0,
    duration: 500,
    easing: Easing.inOut(Easing.quad),
    useNativeDriver: true,
  }).start();
};

const slideOut = slideAnim => {
  Animated.timing(slideAnim, {
    toValue: 1000,
    duration: 500,
    easing: Easing.inOut(Easing.quad),
    useNativeDriver: true,
  }).start();
};

export const AuthAnimation = {
  fadeIn,
  fadeOut,
  slideIn,
  slideOut,
};
