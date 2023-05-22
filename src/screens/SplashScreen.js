import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import animationLogo from '../../assets/splashAnimation.gif';
import { SplashAnimation } from '../animation/SplashAnimation';
import { Logo } from '../assets/icons/Logo';

const SplashScreenForSpacesheep = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTitle, setShowTitle] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeOutAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    SplashAnimation.fadeIn(fadeAnim, setShowTitle);
    SplashAnimation.fadeOut(fadeOutAnim);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      {isLoading && <ActivityIndicator size={'large'} />}
      <Animated.View
        style={[
          {
            opacity: fadeOutAnim,
          },
        ]}
      >
        <Image
          source={animationLogo}
          style={{
            width: 200,
            height: 350,
            backgroundColor: '#CFB0DD',
            opacity: isLoading ? 0 : 1,
          }}
          onLoadStart={() => setIsLoading(true)}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </Animated.View>
      <Animated.View style={{ opacity: showTitle ? fadeOutAnim : fadeAnim }}>
        <Logo.Title />
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreenForSpacesheep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CFB0DD',
  },
});
