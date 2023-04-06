import { useNavigation } from '@react-navigation/native';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, View, Animated } from 'react-native';
import { loginWithGoogle } from '../../modules/Auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthAnimation } from '../../animation/AuthAnimation';
import AuthModal from '../../modals/AuthModal';

const LoginGuideScreen = () => {
  const insets = useSafeAreaInsets();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(1000)).current;

  const showModal = () => {
    AuthAnimation.fadeIn(fadeAnim);
    AuthAnimation.slideIn(slideAnim);
    setShowAuthModal(true);
  };

  const hideModal = () => {
    AuthAnimation.fadeOut(fadeAnim, setShowAuthModal);
    AuthAnimation.slideOut(slideAnim);
  };

  return (
    <View style={[loginGuideStyles.container, { paddingTop: insets.top }]}>
      <AuthModal
        showAuthModal={showAuthModal}
        hideModal={hideModal}
        fadeAnim={fadeAnim}
        slideAnim={slideAnim}
      />
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

export default LoginGuideScreen;
