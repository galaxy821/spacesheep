import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import animationLogo from '../../assets/splashAnimation.gif';
import { Image } from 'expo-image';
import Title from '../asset/TitleSVG';

const SplashScreenForSpacesheep = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [showTitle, setShowTitle] = React.useState(false);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const fadeOutAnim = React.useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 2500,
    }).start(() => setShowTitle(true));

    Animated.timing(fadeOutAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
      delay: 4270,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoadStart = () => {
    // eslint-disable-next-line no-console
    console.log('Loading...');
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    // eslint-disable-next-line no-console
    console.log('Loaded!');
    setIsLoading(false);
  };

  const handleLoadError = () => {
    setIsLoading(false);
  };

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
          onLoadStart={handleLoadStart}
          onLoad={handleLoadEnd}
          onError={handleLoadError}
        />
      </Animated.View>
      <Animated.View style={{ opacity: showTitle ? fadeOutAnim : fadeAnim }}>
        <Title />
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
