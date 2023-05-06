import { Text, View, StyleSheet } from 'react-native';
import SpaceBox from '../components/common/SpaceBox';
import { TextInputForAuth } from '../styles/AuthStyle';
import { PropTypes } from 'prop-types';
import Title from '../components/Title';
import { useState } from 'react';
import styled from 'styled-components/native';
import { AuthButton, AuthTextButton } from '../components/auth/AuthButton';

const LoginContent = ({ hideModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={loginStyles.container}>
      <ModalHeader>
        <ExitButton onPress={hideModal}>
          <Text>닫기</Text>
        </ExitButton>
      </ModalHeader>

      <SpaceBox height={5} />

      <AuthFormView>
        <Title size={30} />
        <SpaceBox height={40} />
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

        <AuthButton title="로그인" width={240} height={45} />

        <SpaceBox height={30} />

        <AuthTextButton title="비밀번호를 잊으셨나요?" onPress={() => {}} />
      </AuthFormView>
    </View>
  );
};

LoginContent.propTypes = {
  hideModal: PropTypes.func,
};

export default LoginContent;

const loginStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 300,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

const ModalHeader = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
`;

const ExitButton = styled.TouchableOpacity``;

const AuthFormView = styled.View`
  display: flex;
  position: relative;
  width: 250px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
