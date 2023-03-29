import { StyleSheet, Text, View } from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={signUpStyles.container}>
      <Text>SignUpScreen</Text>
    </View>
  );
};

const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

export default SignUpScreen;
