import SpaceBox from '../../components/common/SpaceBox';
import { TextInputForAuth } from '../../styles/AuthStyle';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

import { AsyncStorage } from '@react-native-async-storage/async-storage';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Alert,
} from 'react-native';

const SetPasswordContent = ({ email, setCurrentSignUpContent }) => {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    // if (password !== confirmPassword) {
    //   Alert.alert('비밀번호가 일치하지 않습니다.');
    //   return;
    // }
    // const response = await signUp(email, password);
    // if (response && response.accessToken && response.refreshToken) {
    //   await AsyncStoragegerage.setItem('accessToken', response.accessToken);
    //   await AsyncStorage.setItem('refreshToken', response.refreshToken);
    //   navigation.navigate('NextScreen'); // 여기서 'NextScreen'을 다음 화면의 이름으로 바꿔주세요.
    // } else {
    //   Alert.alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        계정에 사용할 비밀번호를 설정하세요.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호 확인"
        secureTextEntry
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
      />
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>가입하기</Text>
      </TouchableOpacity>
    </View>
  );
};

SetPasswordContent.propTypes = {
  email: PropTypes.string.isRequired,
  setCurrentSignUpContent: PropTypes.func,
};

export default SetPasswordContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#4E9DF3',
    borderRadius: 5,
    padding: 10,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
