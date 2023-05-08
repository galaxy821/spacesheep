import {
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Text,
  Animated,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import SpaceBox from '../../components/common/SpaceBox';
import { PropTypes } from 'prop-types';
// import { useNavigation } from '@react-navigation/native';
import { useRef, useState, useEffect } from 'react';
import { signUpContent } from '../../values/AuthValue';
import ViewBox from '../../components/common/ViewBox';
// import { sendEmailForAuth } from '../../modules/Auth';

const emailRegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const SetEmailContent = ({
  email,
  setEmail,
  setOpenModal,
  setCurrentErrorMessage,
  setCurrentSignUpContent,
}) => {
  // const navigation = useNavigation();

  const [textAnim] = useState(new Animated.Value(1));
  const [inputAnim] = useState(new Animated.Value(1));

  const windowWidth = Dimensions.get('window').width;

  const textInputRef = useRef(null);

  const fadeOut = () => {
    Animated.stagger(300, [
      Animated.timing(textAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(inputAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentSignUpContent(signUpContent.EMAIL_VERIFIED);
    });
  };

  const onSendEmail = () => {
    if (email.length === 0) {
      setCurrentErrorMessage('이메일을 입력해주세요.');
      setOpenModal(true);
      return;
    }
    if (!emailRegExp.test(email)) {
      setCurrentErrorMessage('이메일 형식이 올바르지 않습니다.');
      setOpenModal(true);
      return;
    } else {
      // post /auth/signup/email
      // const code = sendEmailForAuth(email);
      const code = 200;

      if (code === 200) {
        fadeOut();
      } else if (code === 401) {
        // 401: 이미 가입된 이메일
        setCurrentErrorMessage('이미 가입된 이메일입니다.');
        setOpenModal(true);
        return;
      }
    }
  };

  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  }, []);

  return (
    <View style={signUpStyles.container}>
      <SpaceBox height={30} />
      <Animated.View style={{ opacity: textAnim }}>
        <ViewBox
          width={windowWidth * 0.9}
          height={windowWidth * 0.9 * 0.3}
          padding={0}
          margin={0}
        >
          <Text style={signUpStyles.contentText}>
            {'spacesheep 가입을 위해\n이메일을 입력하세요.'}
          </Text>
        </ViewBox>
      </Animated.View>

      <Animated.View
        style={{ ...signUpStyles.textInputContainer, opacity: inputAnim }}
      >
        <TextInput
          placeholder="이메일"
          value={email}
          onChangeText={setEmail}
          inputMode={'email'}
          style={signUpStyles.input}
          ref={textInputRef}
          onSubmitEditing={onSendEmail}
        />

        <TouchableOpacity style={signUpStyles.nextButton} onPress={onSendEmail}>
          <Feather name="arrow-right-circle" size={36} color="black" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

SetEmailContent.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
  setOpenModal: PropTypes.func,
  setCurrentErrorMessage: PropTypes.func,
  setCurrentSignUpContent: PropTypes.func,
};

export default SetEmailContent;

const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  contentText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
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
    paddingTop: 15,
    paddingLeft: 10,
    alignItems: 'start',
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
