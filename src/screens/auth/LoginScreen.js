import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../../components/SearchBar';
import styled from 'styled-components/native';
import Title from '../../components/Title';
import SpaceBox from '../../components/SpaceBox';
import AuthTextInput from '../../components/auth/TextInput';
import React from 'react';
import { TextInputForAuth } from '../../styles/AuthStyle';
import AuthButton from '../../components/auth/AuthButton';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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
      <SpaceBox height={40} />
      <AuthFormView>
        <Title size={36} />
        <SpaceBox height={60} />
        <TextInputForAuth
          placeholder="이메일"
          value={email}
          onChangeText={setEmail}
          inputMode={'email'}
        />
        <SpaceBox height={20} />
        <TextInputForAuth
          placeholder="비밀번호"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <SpaceBox height={40} />
        <AuthButton />
      </AuthFormView>
    </View>
  );
};

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  margin-right: 25px;
`;

const AuthFormView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export default LoginScreen;
