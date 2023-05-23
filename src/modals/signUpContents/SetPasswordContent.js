import SpaceBox from '../../components/common/SpaceBox';
import { useState, useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';
import { Feather } from '@expo/vector-icons';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Animated,
} from 'react-native';
import { signUpContent } from '../../values/AuthValue';
import { authStoreSelector } from '../../store/Auth';
import { useSetRecoilState } from 'recoil';
import { setToken } from '../../modules/Token';

/**
 * 비밀번호 설정 콘텐츠
 * @param {object} props 컴포넌트 props
 * @param {string} email 이메일
 * @param {function} setCurrentSignUpContent 회원가입 컨텐츠 변경 함수
 * @param {function} openErrorModal 에러 모달 오픈 함수
 * @returns {JSX.Element} 비밀번호 설정 콘텐츠 컴포넌트
 */
const SetPasswordContent = ({
  email,
  setCurrentSignUpContent,
  openErrorModal,
}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [viewAnim] = useState(new Animated.Value(0));

  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const setTokenToStore = useSetRecoilState(authStoreSelector);

  const fadeIn = () => {
    Animated.timing(viewAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(viewAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentSignUpContent(signUpContent.SET_PROFILE);
    });
  };

  const handleSignUp = async () => {
    if (password.length < 8) {
      openErrorModal('비밀번호는 8자리 이상이어야 합니다.');
      return;
    } else if (password !== confirmPassword) {
      openErrorModal('비밀번호가 일치하지 않습니다.');
      return;
    } else {
      //sign up
      // const result = signUpForUser(email, password);
      const result = true;
      if (result) {
        setToken('accessToken_for_test', 'refreshToken_for_test');
        setTokenToStore({
          accessToken: 'accessToken_for_test',
          refreshToken: 'refreshToken_for_test',
        });
        fadeOut();
      } else {
        openErrorModal('회원가입에 실패했습니다.');
        return;
      }
    }
  };

  useEffect(() => {
    fadeIn();
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Animated.View style={{ ...styles.container, opacity: viewAnim }}>
      <SpaceBox height={30} />
      <Text style={styles.headerText}>
        계정에 사용할 비밀번호를 설정하세요.
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            value={password}
            returnKeyType={'next'}
            ref={passwordRef}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
          />
          <TouchableOpacity style={styles.nextButton}>
            <Feather name="arrow-right-circle" size={36} color="white" />
          </TouchableOpacity>
        </View>

        <SpaceBox height={10} />
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="비밀번호 확인"
            secureTextEntry
            onChangeText={text => setConfirmPassword(text)}
            value={confirmPassword}
            ref={confirmPasswordRef}
            onSubmitEditing={handleSignUp}
          />
          <TouchableOpacity style={styles.nextButton} onPress={handleSignUp}>
            <Feather name="arrow-right-circle" size={36} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <SpaceBox height={10} />
    </Animated.View>
  );
};

SetPasswordContent.propTypes = {
  email: PropTypes.string.isRequired,
  setCurrentSignUpContent: PropTypes.func,
  openErrorModal: PropTypes.func,
};

export default SetPasswordContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  inputContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 35,
  },
  input: {
    height: 40,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
  },
  signUpButton: {
    borderRadius: 5,
    padding: 10,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  nextButton: {
    marginStart: 10,
    marginEnd: 10,
  },
});
