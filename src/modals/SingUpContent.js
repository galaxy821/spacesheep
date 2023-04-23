import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { AuthButton } from '../components/auth/AuthButton';
import SpaceBox from '../components/SpaceBox';
import Title from '../components/Title';
// import { signUpWithEmail } from '../modules/Auth';
import { TextInputForAuth } from '../styles/AuthStyle';
import ConfirmModal from './ConfirmModal';
import EmailVerfiedContent from './EmailVerified';

const emailRegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const SingUpModal = ({ hideModal }) => {
  const [isOpenMoadl, setOpenModal] = useState(false);
  const [currentErrorMessage, setCurrentErrorMessage] = useState('');
  const [currentContent, setCurrentContent] = useState('SIGN_UP_CONTENT');

  return (
    <View style={signUpStyles.container}>
      <ConfirmModal
        isOpen={isOpenMoadl}
        onClose={() => setOpenModal(false)}
        contentText={currentErrorMessage}
      />
      <ModalHeader>
        <ExitButton onPress={hideModal}>
          <Text>닫기</Text>
        </ExitButton>
      </ModalHeader>
      <SpaceBox height={5} />
      {currentContent === 'SIGN_UP_CONTENT' ? (
        <SignUpContent
          setCurrentErrorMessage={setCurrentErrorMessage}
          setOpenModal={setOpenModal}
          setCurrentContent={setCurrentContent}
        />
      ) : (
        currentContent === 'EMAIL_VERIFIED_CONTENT' && <EmailVerfiedContent />
      )}
    </View>
  );
};
SingUpModal.propTypes = {
  hideModal: PropTypes.func,
};

export default SingUpModal;

const SignUpContent = ({
  setCurrentErrorMessage,
  setOpenModal,
  setCurrentContent,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onSignUp = () => {
    if (email.length === 0) {
      setCurrentErrorMessage('이메일을 입력해주세요.');
      setOpenModal(true);
      return;
    }
    if (!emailRegExp.test(email)) {
      setCurrentErrorMessage('이메일 형식이 올바르지 않습니다.');
      setOpenModal(true);
      return;
    } else if (password.length === 0) {
      setCurrentErrorMessage('비밀번호를 입력해주세요.');
      setOpenModal(true);
    } else if (password.length < 8) {
      setCurrentErrorMessage('비밀번호는 8자 이상이어야 합니다.');
      setOpenModal(true);
    } else if (rePassword.length === 0) {
      setCurrentErrorMessage('비밀번호를 재입력해주세요.');
      setOpenModal(true);
    } else if (password !== rePassword) {
      setCurrentErrorMessage('비밀번호가 일치하지 않습니다.');
      setOpenModal(true);
    } else {
      // consnt signUpWithEmail(email, password);
      const code = 200;
      if (code === 200) {
        setCurrentContent('EMAIL_VERIFIED_CONTENT');
      } else {
        //
      }
    }
  };

  return (
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

      <SpaceBox height={20} />

      <TextInputForAuth
        placeholder="비밀번호 재입력"
        value={rePassword}
        onChangeText={setRePassword}
        secureTextEntry={true}
      />

      <SpaceBox height={40} />

      <AuthButton
        title="이메일로 회원가입"
        width={240}
        height={45}
        onPress={onSignUp}
      />

      <SpaceBox height={30} />
    </AuthFormView>
  );
};

SignUpContent.propTypes = {
  setCurrentErrorMessage: PropTypes.func,
  setOpenModal: PropTypes.func,
  setCurrentContent: PropTypes.func,
};

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
