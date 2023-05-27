import {
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Text,
  Animated,
  Easing,
} from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { PropTypes } from 'prop-types';
import SpaceBox from '../../components/common/SpaceBox';
import { emailRegExp, signUpContent } from '../../values/AuthValue';
import ViewBox from '../../components/common/ViewBox';
import { AuthAnimation } from '../../animation/AuthAnimation';
// import { sendEmailForVerified } from '../../modules/Auth';

/**
 * 이메일 입력 컨텐츠
 * @param {object} props 컴포넌트 props
 * @param {string} email 이메일
 * @param {function} setEmail 이메일 변경 함수
 * @param {function} openErrorModal 에러 모달 오픈 함수
 * @param {function} setCurrentSignUpContent 회원가입 컨텐츠 변경 함수
 * @returns {JSX.Element} 이메일 입력 컨텐츠 컴포넌트
 */
const SetEmailContent = ({
  email,
  setEmail,
  openErrorModal,
  setCurrentSignUpContent,
}) => {
  const windowWidth = Dimensions.get('window').width;
  const [textAnim] = useState(new Animated.Value(1));
  const [inputAnim] = useState(new Animated.Value(1));
  const textInputRef = useRef(null);

  const moveToCheckVerifiedEmailContent = () => {
    Animated.stagger(300, [
      AuthAnimation.fadeOut(textAnim, 500),
      AuthAnimation.fadeOut(inputAnim, 500),
    ]).start(() => {
      setCurrentSignUpContent(signUpContent.EMAIL_VERIFIED);
    });
  };

  const onSendEmail = () => {
    if (email.length === 0) {
      openErrorModal('이메일을 입력해주세요.');
      return;
    }
    if (!emailRegExp.test(email)) {
      openErrorModal('이메일 형식이 올바르지 않습니다.');
      return;
    } else {
      // POST /auth/email-verified
      // const code = sendEmailForVerified(email);
      const code = 200;

      if (code === 200) {
        // 200: 이메일 전송 성공
        moveToCheckVerifiedEmailContent();
      } else if (code === 401) {
        // 401: 이미 가입된 이메일
        openErrorModal('이미 가입된 이메일입니다.');
        return;
      } else {
        // 500 : 기타 오류
        openErrorModal('오류가 발생했습니다. 잠시후 시도해주세요');
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
  openErrorModal: PropTypes.func,
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
    fontSize: 26,
    fontWeight: 'bold',
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
