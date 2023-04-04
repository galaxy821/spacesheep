import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../../components/SearchBar';
import styled from 'styled-components/native';
import Title from '../../components/Title';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={loginStyles.container}>
      <LoginHeader>
        <ExitButton onPress={handleBackPress} style={{ marginLeft: 10 }}>
          <Text>Back</Text>
        </ExitButton>
      </LoginHeader>
      <AuthFormView>
        <Title size={22} />
        <SearchBar />
        <SearchBar />
      </AuthFormView>
    </View>
  );
};

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const LoginHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
`;

const ExitButton = styled.TouchableOpacity`
  margin-right: 20px;
`;

const AuthFormView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export default LoginScreen;
