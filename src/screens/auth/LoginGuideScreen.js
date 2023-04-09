// import { useNavigation } from '@react-navigation/native';
import { useState, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { loginWithGoogle } from '../../modules/Auth';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthAnimation } from '../../animation/AuthAnimation';
import AuthModal from '../../modals/AuthModal';
import { Image } from 'expo-image';
import sheepKnap from '../../../assets/sheepKnapImg.png';
import { lightThemeColor } from '../../styles/Color';
import { AuthTextButton, LoginButton } from '../../components/auth/AuthButton';
import SpaceBox from '../../components/SpaceBox';
import GoogleLogo from '../../asset/GoogleLogo';
import AppleLogo from '../../asset/AppleLogo';
import Title from '../../components/Title';
import { LOGIN_CONTENT, SIGNUP_CONTENT } from '../../values/AuthValue';

const LoginGuideScreen = () => {
  const insets = useSafeAreaInsets();
  const [showAuthModal, setShowAuthModal] = useState(false);
  // const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideLoginAnim = useRef(new Animated.Value(1000)).current;
  const slideSignUpAnim = useRef(new Animated.Value(1000)).current;

  const showLoginModal = () => {
    AuthAnimation.fadeIn(fadeAnim);
    AuthAnimation.slideIn(slideLoginAnim);
    setShowAuthModal(true);
  };

  const hideLoginModal = () => {
    AuthAnimation.fadeOut(fadeAnim, setShowAuthModal);
    AuthAnimation.slideOut(slideLoginAnim);
  };

  const showSignUpModal = () => {
    AuthAnimation.fadeIn(fadeAnim);
    AuthAnimation.slideIn(slideSignUpAnim);
    setShowAuthModal(true);
  };

  const hideSignUpModal = () => {
    AuthAnimation.fadeOut(fadeAnim, setShowAuthModal);
    AuthAnimation.slideOut(slideSignUpAnim);
  };

  return (
    <View style={[loginGuideStyles.container, { paddingTop: insets.top }]}>
      <AuthModal
        showAuthModal={showAuthModal}
        hideModal={hideLoginModal}
        fadeAnim={fadeAnim}
        slideAnim={slideLoginAnim}
        modalContent={LOGIN_CONTENT}
      />
      <AuthModal
        showAuthModal={showAuthModal}
        hideModal={hideLoginModal}
        fadeAnim={fadeAnim}
        slideAnim={slideLoginAnim}
        modalContent={SIGNUP_CONTENT}
      />

      <Image style={loginGuideStyles.image} source={sheepKnap}></Image>

      <Title size={32} />

      <SpaceBox height={30} />

      <LoginButton
        title="이메일로 로그인"
        backgroundColor={lightThemeColor.primary}
        textColor={'white'}
        onPress={showLoginModal}
      ></LoginButton>

      <SpaceBox height={15} />

      <LoginButton
        title="Google로 로그인"
        backgroundColor={'white'}
        textColor={'black'}
        onPress={loginWithGoogle}
      >
        <GoogleLogo />
      </LoginButton>

      <SpaceBox height={15} />

      <LoginButton
        title="Apple로 로그인"
        backgroundColor={'black'}
        textColor={'white'}
        onPress={loginWithGoogle}
      >
        <AppleLogo />
      </LoginButton>

      <SpaceBox height={30} />

      <AuthTextButton
        title="아직 회원이 아니신가요?"
        onPress={showSignUpModal}
      />
    </View>
  );
};

const loginGuideStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4D6EA',
  },
  image: {
    width: 150,
    height: 270,
  },
});

export default LoginGuideScreen;
