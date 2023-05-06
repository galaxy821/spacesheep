import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';
import SpaceBox from '../../components/common/SpaceBox';
import styled from 'styled-components/native';
import { TextInputForAuth } from '../../styles/AuthStyle';
import { AuthButton } from '../../components/auth/AuthButton';
import { Feather } from '@expo/vector-icons';
import ConfirmModal from '../../modals/ConfirmModal';
import SetEmailContent from '../../modals/signup/SetEmailContent';
import { signUpContent } from '../../values/AuthValue';
import VerifiedEmailContent from '../../modals/signup/VerifiedEmailContent';
import SetPasswordContent from '../../modals/signup/SetPasswordContent';

const SignUpScreen = () => {
  const [isOpenMoadl, setOpenModal] = useState(false);
  const [currentErrorMessage, setCurrentErrorMessage] = useState('');
  const [currentSignUpContent, setCurrentSignUpContent] = useState(
    signUpContent.SET_EMAIL
  );
  const [email, setEmail] = useState('');
  const [fadeAnimation, setFadeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  });

  const navigation = useNavigation();

  return (
    <View style={signUpStyles.container}>
      <ConfirmModal
        isOpen={isOpenMoadl}
        onClose={() => setOpenModal(false)}
        contentText={currentErrorMessage}
      />

      <View style={signUpStyles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {currentSignUpContent === signUpContent.SET_EMAIL ? (
        <SetEmailContent
          email={email}
          setEmail={setEmail}
          setOpenModal={setOpenModal}
          setCurrentErrorMessage={setCurrentErrorMessage}
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
        />
      ) : (
        // <SetNicknameContent
        //   email={email}
        //   setCurrentSignUpContent={setCurrentSignUpContent}
        // />
        <></>
      )}

      <SpaceBox height={30} />
      {/* <View style={signUpStyles.separator} /> */}
    </View>
  );
};

const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    padding: 22,
    backgroundColor: 'white',
  },
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    // flexDirection: 'column',
    width: '100%',
    // justifyContent: 'start',
    // alignItems: 'start',
    // flexWrap: 'nowrap',
  },
  headerContainer: {
    display: 'flex',
    // flexDirection: 'column',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 15,
    paddingLeft: 10,
    alignItems: 'start',
  },
  input: {
    // width: '100%',
    flex: 1,
    height: 40,
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
  },
  nextButton: {
    // padding: 10,
    // marginTop: 20,
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

export default SignUpScreen;

const TextForSignUp = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ModalHeader = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: start;
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
