import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={signUpStyles.container}>
      <Text>SignUpScreen</Text>
      <Button title="back" onPress={() => navigation.goBack()}></Button>
    </View>
  );
};

const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUpScreen;
