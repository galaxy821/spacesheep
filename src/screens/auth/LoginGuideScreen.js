import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

const LoginGuideScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={loginGuideStyles.container}>
      <Text>LoginGuideScreen</Text>
      <Button title="로그인" onPress={() => navigation.push('Login')}></Button>
      <Button
        title="회원가입"
        onPress={() => navigation.push('SignUp')}
      ></Button>
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
