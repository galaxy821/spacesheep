import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import SpaceBox from '../components/common/SpaceBox';
import { Feather } from '@expo/vector-icons';
import ConfirmModal from './ConfirmModal';
import SetEmailContent from './signUpContents/SetEmailContent';
import { signUpContent } from '../values/AuthValue';
import VerifiedEmailContent from './signUpContents/VerifiedEmailContent';
import SetPasswordContent from './signUpContents/SetPasswordContent';
import SetProfileContent from './signUpContents/SetProfileContent';
import ErrorContent from '../screens/auth/ErrorContent';
import WelcomeContent from './signUpContents/WelcomeContent';

/**
 * 회원가입 모달
 * @returns {JSX.Element} 회원가입 모달 컴포넌트
 */
const SignUpModal = () => {
  const [isOpenMoadl, setOpenModal] = useState(false);
  const [showExitButton, setShowExitButton] = useState(true);
  const [currentErrorMessage, setCurrentErrorMessage] = useState('');
  const [currentSignUpContent, setCurrentSignUpContent] = useState(
    signUpContent.SET_EMAIL
  );
  const [email, setEmail] = useState('');
  const [nickname, setNickName] = useState('');

  const navigation = useNavigation();

  const openErrorModal = message => {
    setCurrentErrorMessage(message);
    setOpenModal(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={signUpStyles.container}>
        <ConfirmModal
          isOpen={isOpenMoadl}
          onClose={() => setOpenModal(false)}
          contentText={currentErrorMessage}
        />

        <View style={signUpStyles.headerContainer}>
          {showExitButton && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="x" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>

        {currentSignUpContent === signUpContent.SET_EMAIL ? (
          <SetEmailContent
            email={email}
            setEmail={setEmail}
            openErrorModal={openErrorModal}
            setCurrentSignUpContent={setCurrentSignUpContent}
          />
        ) : currentSignUpContent === signUpContent.EMAIL_VERIFIED ? (
          <VerifiedEmailContent
            email={email}
            setCurrentSignUpContent={setCurrentSignUpContent}
          />
        ) : currentSignUpContent === signUpContent.SET_PASSWORD ? (
          <SetPasswordContent
            email={email}
            setCurrentSignUpContent={setCurrentSignUpContent}
            openErrorModal={openErrorModal}
          />
        ) : currentSignUpContent === signUpContent.SET_PROFILE ? (
          <SetProfileContent
            nickname={nickname}
            setNickName={setNickName}
            navigation={navigation}
            openErrorModal={openErrorModal}
            setShowExitButton={setShowExitButton}
            setCurrentSignUpContent={setCurrentSignUpContent}
          />
        ) : currentSignUpContent === signUpContent.WELCOME ? (
          <WelcomeContent nickname={nickname} />
        ) : (
          <ErrorContent />
        )}

        <SpaceBox height={30} />
        {/* <View style={signUpStyles.separator} /> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const signUpStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    textAlign: 'start',

    alignItems: 'center',
    padding: 22,
    backgroundColor: 'white',
  },
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 42,
    paddingTop: 15,
    paddingLeft: 0,
    alignItem: 'start',
  },
  input: {
    flex: 1,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
  },
  nextButton: {
    marginStart: 10,
    marginEnd: 10,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default SignUpModal;
