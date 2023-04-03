import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../../components/SearchBar';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={loginStyles.container}>
      <Text>LoginScreen</Text>
      <Button title="back" onPress={() => navigation.goBack()}></Button>
      <SearchBar />
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
