import { StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={welcomeStyles.container}>
      <Text>WelcomeScreen</Text>
    </View>
  );
};

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
