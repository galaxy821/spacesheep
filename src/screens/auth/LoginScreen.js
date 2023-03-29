import { StyleSheet, Text, View } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={loginStyles.container}>
      <Text>LoginScreen</Text>
    </View>
  );
};

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
