import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import animationLogo from '../../assets/splashAnimation.gif';
import { Image } from 'expo-image';

const SplashScreenForSpacesheep = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoadStart = () => {
    console.log('Loading...');
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    console.log('Loaded!');
    setIsLoading(false);
  };

  const handleLoadError = () => {
    setIsLoading(false);
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      {/* <RootNavigator /> */}
      <View style={styles.container}>
        {isLoading && <ActivityIndicator size={'large'} />}
        <Image
          source={animationLogo}
          style={{
            width: 200,
            height: 350,
            backgroundColor: '#888',
            opacity: isLoading ? 0 : 1,
          }}
          onLoadStart={handleLoadStart}
          onLoad={handleLoadEnd}
          onError={handleLoadError}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default SplashScreenForSpacesheep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#888',
  },
});
