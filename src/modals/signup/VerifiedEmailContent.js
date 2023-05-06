import { useEffect, useState } from 'react';
import { Text, Animated } from 'react-native';
import { TextInput, StyleSheet } from 'react-native';
import { View } from 'react-native';
import SpaceBox from '../../components/common/SpaceBox';
import { getUserStatus } from '../../modules/Auth';
import { PropTypes } from 'prop-types';
import { signUpContent } from '../../values/AuthValue';
import SendEmailGIF from '../../asset/lottie/send_email.gif';
import { Image } from 'expo-image';

const VerifiedEmailContent = ({ email, setCurrentSignUpContent }) => {
  const [isVerified, setIsVerified] = useState(false);

  const [mainTextAnim] = useState(new Animated.Value(0));
  const [inputAnim] = useState(new Animated.Value(0));
  const [subTextAnim] = useState(new Animated.Value(0));
  const [sendEmailIconAnim] = useState(new Animated.Value(0));

  /* 
  //email check logic
  useEffect(() => {
    const checkUserStatus = async () => {
      const response = await getUserStatus(email);

      if (response.emailVerified) {
        setIsVerified(true);
      } 
    };

    const intervalId = setInterval(checkUserStatus, 5000);

    return () => {
      clearInterval(intervalId);
    };

    //eslint-disable-next-line
  }, []);*/

  const fadeIn = () => {
    Animated.stagger(0, [
      Animated.timing(mainTextAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(inputAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(subTextAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const SendEmailIconAnim = () => {
    Animated.stagger(500, [
      Animated.timing(sendEmailIconAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    fadeIn();
    setTimeout(() => {
      SendEmailIconAnim();
    }, 1000);
    // setTimeout(() => {
    //   setIsVerified(true);
    // }, 5000);
  }, []);

  useEffect(() => {
    if (isVerified) {
      setCurrentSignUpContent(signUpContent.SET_PASSWORD); // emailVerified가 true일 때 프로필 화면으로 이동합니다.
    }
    //eslint-disable-next-line
  }, [isVerified]);

  return (
    <View style={signUpStyles.container}>
      <SpaceBox height={30} />
      <Animated.View style={{ opacity: mainTextAnim }}>
        <Text style={signUpStyles.mainContentText}>
          가입한 이메일 주소로 인증 메일이 발송되었습니다.
        </Text>
      </Animated.View>

      <SpaceBox height={50} />

      <Animated.View
        style={{ ...signUpStyles.container, opacity: sendEmailIconAnim }}
      >
        <Image
          source={SendEmailGIF}
          style={{
            width: 220,
            height: 220,
            backgroundColor: 'white',
          }}
        />
      </Animated.View>

      <Animated.View style={{ ...signUpStyles.container, opacity: inputAnim }}>
        <Text style={signUpStyles.emailContentText}>{email}</Text>
      </Animated.View>

      <SpaceBox height={150} />

      <Animated.View
        style={{ ...signUpStyles.subTextContainer, opacity: subTextAnim }}
      >
        <Text style={signUpStyles.subContentText}>
          메일 인증이 완료된 후 다음 단계로 넘어갈 수 있습니다.
        </Text>
      </Animated.View>
    </View>
  );
};

VerifiedEmailContent.propTypes = {
  email: PropTypes.string,
  setCurrentSignUpContent: PropTypes.func,
};

export default VerifiedEmailContent;

const signUpStyles = StyleSheet.create({
  container: {
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mainContentText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 27,
  },
  emailContentText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subContentText: {
    fontSize: 15,
    marginBottom: 20,
    lineHeight: 22,
  },
});
