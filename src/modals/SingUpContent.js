import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { AuthButton } from '../components/auth/AuthButton';
import SpaceBox from '../components/SpaceBox';
import Title from '../components/Title';
import { TextInputForAuth } from '../styles/AuthStyle';

const SingUpContent = ({ hideModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={signUpStyles.container}>
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

        <AuthButton title="이메일로 회원가입" width={240} height={45} />

        <SpaceBox height={30} />
      </AuthFormView>
    </View>
  );
};
SingUpContent.propTypes = {
  hideModal: PropTypes.func,
};

export default SingUpContent;

const signUpStyles = StyleSheet.create({
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
