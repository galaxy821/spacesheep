import { Animated, Easing } from 'react-native';

/**
 * Splash Content 나타나는 애니메이션
 * @param {Animated.value} fadeAnim
 * @param {function} setShowTitle
 * @returns
 */
const fadeIn = (fadeAnim, setShowTitle) => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.back(),
    delay: 1500,
  }).start(() => setShowTitle(true));
};

/**
 * Splash Content 사라지는 애니메이션
 * @param {Animated.value} fadeOutAnim
 * @returns
 */
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

/**
 * splash screen 사라지는 애니메이션
 * @param {Animated.Value} fadeAnim
 * @param {function} setShowSplash
 * @returns
 */
export const fadeOutSplashScreen = (fadeAnim, setShowSplash) => {
  Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  }).start(() => setShowSplash(false));
};
