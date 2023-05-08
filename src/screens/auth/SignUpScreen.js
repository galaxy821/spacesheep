import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import SpaceBox from '../../components/common/SpaceBox';
import { Feather } from '@expo/vector-icons';
import ConfirmModal from '../../modals/ConfirmModal';
import SetEmailContent from '../../modals/signup/SetEmailContent';
import { signUpContent } from '../../values/AuthValue';
import VerifiedEmailContent from '../../modals/signup/VerifiedEmailContent';
import SetPasswordContent from '../../modals/signup/SetPasswordContent';
import SetProfileContent from '../../modals/signup/SetProfileContent';
import ErrorContent from './ErrorContent';

const SignUpScreen = () => {
  const [isOpenMoadl, setOpenModal] = useState(false);
  const [currentErrorMessage, setCurrentErrorMessage] = useState('');
  const [currentSignUpContent, setCurrentSignUpContent] = useState(
    signUpContent.SET_EMAIL
  );
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            setOpenModal={setOpenModal}
            setCurrentErrorMessage={setCurrentErrorMessage}
          />
        ) : currentSignUpContent === signUpContent.SET_PROFILE ? (
          <SetProfileContent
            navigation={navigation}
            setCurrentErrorMessage={setCurrentErrorMessage}
            setOpenModal={setOpenModal}
          />
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
    alignItem: 'start',
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
