import { StyleSheet, Text, View } from 'react-native';

const LoginGuideScreen = () => {
  return (
    <View style={loginGuideStyles.container}>
      <Text>LoginGuideScreen</Text>
    </View>
  );
};

const loginGuideStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginGuideScreen;
