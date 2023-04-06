import { useNavigation } from '@react-navigation/native';
import { useState, useRef } from 'react';
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from 'react-native';
import { BlurView } from 'expo-blur';
import styled from 'styled-components/native';
import AuthButton from '../../components/auth/AuthButton';
import SpaceBox from '../../components/SpaceBox';
import Title from '../../components/Title';
import { loginWithGoogle } from '../../modules/Auth';
import { TextInputForAuth } from '../../styles/AuthStyle';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginGuideScreen = () => {
  const insets = useSafeAreaInsets();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const navigation = useNavigation();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(1000)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setShowAuthModal(false));
  };

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: 1000,
      duration: 500,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    }).start();
  };

  const showModal = () => {
    fadeIn();
    slideIn();
    setShowAuthModal(true);
  };

  const hideModal = () => {
    fadeOut();
    slideOut();
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[loginGuideStyles.container, { paddingTop: insets.top }]}>
      <Modal
        animationType="none"
        transparent={true}
        visible={showAuthModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          hideModal();
        }}
      >
        <BlurView
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
          intensity={30}
        >
          <Animated.View
            style={{
              transform: [{ translateY: slideAnim }],
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View>
              <View style={loginStyles.container}>
                <LoginHeader>
                  <ExitButton onPress={hideModal}>
                    <Text>닫기</Text>
                  </ExitButton>
                </LoginHeader>
                <AuthFormView>
                  <Title size={36} />
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
                  <AuthButton />
                  <SpaceBox height={30} />
                  <TouchableOpacity>
                    <Text>비밀번호를 잊으셨나요?</Text>
                  </TouchableOpacity>
                </AuthFormView>
              </View>
            </View>
          </Animated.View>
          <TouchableOpacity
            style={{ flex: 1, position: 'absolute' }}
            activeOpacity={1}
            onPress={hideModal}
          />
        </BlurView>
      </Modal>
      <Text>LoginGuideScreen</Text>
      <Button title="로그인" onPress={showModal}></Button>
      <Button
        title="회원가입"
        onPress={() => navigation.push('SignUp')}
      ></Button>
      <Button title="구글로 로인" onPress={loginWithGoogle}></Button>
    </View>
  );
};

const loginGuideStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});

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

const LoginHeader = styled.View`
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

export default LoginGuideScreen;
