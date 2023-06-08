import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import sheepKnap from '../../../assets/sheepKnapImg.png';
import { lightThemeColor } from '../../styles/Color';
import { AuthTextButton, LoginButton } from '../../components/auth/AuthButton';
import Title from '../../components/Title';
import { AppRoute } from '../../navigations/routes';
import SpaceBox from '../../components/common/SpaceBox';
import { Logo } from '../../assets/icons/Logo';

/**
 * 로그인 가이드 화면
 * @returns {JSX.Element} 로그인 가이드 화면 컴포넌트
 */
const LoginGuideScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={[loginGuideStyles.container, { paddingTop: insets.top }]}>
      <Image style={loginGuideStyles.image} source={sheepKnap}></Image>
      <Title size={32} />
      <SpaceBox height={30} />

      <LoginButton
        title="이메일로 로그인"
        backgroundColor={lightThemeColor.primary}
        textColor={'white'}
      ></LoginButton>

      <SpaceBox height={15} />

      <LoginButton
        title="Google로 로그인"
        backgroundColor={'white'}
        textColor={'black'}
      >
        <Logo.GoogleLogo />
      </LoginButton>

      <SpaceBox height={15} />

      <LoginButton
        title="Apple로 로그인"
        backgroundColor={'black'}
        textColor={'white'}
      >
        <Logo.AppleLogo />
      </LoginButton>

      <SpaceBox height={30} />

      <AuthTextButton
        title="아직 회원이 아니신가요?"
        onPress={() => navigation.navigate(AppRoute.SIGN_UP)}
      />
      <SpaceBox height={30} />
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
