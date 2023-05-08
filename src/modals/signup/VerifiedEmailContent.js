import { useEffect, useState } from 'react';
import { Text, Animated } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import SpaceBox from '../../components/common/SpaceBox';
// import { getUserStatus } from '../../modules/Auth';
import { PropTypes } from 'prop-types';
import { signUpContent } from '../../values/AuthValue';
import SendEmailGIF from '../../asset/lottie/send_email.gif';
import ConfirmGIF from '../../asset/lottie/confirm.gif';
import { Image } from 'expo-image';

const VerifiedEmailContent = ({ email, setCurrentSignUpContent }) => {
  const [isVerified, setIsVerified] = useState(false);

  const [mainTextAnim] = useState(new Animated.Value(0));
  const [inputAnim] = useState(new Animated.Value(0));
  const [subTextAnim] = useState(new Animated.Value(0));
  const [sendEmailIconAnim] = useState(new Animated.Value(0));

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

  const fadeOut = () => {
    Animated.stagger(0, [
      Animated.timing(mainTextAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(inputAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(subTextAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(sendEmailIconAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const VerifiedContentFadeIn = () => {
    Animated.stagger(0, [
      Animated.timing(mainTextAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const VerifiedContentFadeOut = () => {
    Animated.stagger(0, [
      Animated.timing(mainTextAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const SendEmailIconAnim = () => {
    Animated.stagger(300, [
      Animated.timing(sendEmailIconAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleTransition = async () => {
    fadeOut();
    await delay(500);
    setIsVerified(true);
    VerifiedContentFadeIn();

    await delay(2000);
    VerifiedContentFadeOut();

    await delay(500);
    setCurrentSignUpContent(signUpContent.SET_PASSWORD);
  };

  useEffect(() => {
    fadeIn();
    setTimeout(() => {
      SendEmailIconAnim();
    }, 500);
    setTimeout(() => {
      handleTransition();
    }, 5000);
  }, []);

  const delay = duration => {
    return new Promise(resolve => setTimeout(resolve, duration));
  };

  /* 
  //email check logic
  useEffect(() => {
    const checkUserStatus = async () => {
      const response = await getUserStatus(email);

      if (response.emailVerified) {
        handleTransition();
      } 
    };

    const intervalId = setInterval(checkUserStatus, 1000);

    return () => {
      clearInterval(intervalId);
    };

    //eslint-disable-next-line
  }, []);
  */

  return (
    <View
      style={
        !isVerified ? signUpStyles.container : signUpStyles.verifiedContainer
      }
    >
      <SpaceBox height={30} />
      {!isVerified ? (
        <>
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

          <Animated.View
            style={{ ...signUpStyles.container, opacity: inputAnim }}
          >
            <Text style={signUpStyles.emailContentText}>{email}</Text>
          </Animated.View>

          <SpaceBox height={200} />

          <Animated.View
            style={{ ...signUpStyles.subTextContainer, opacity: subTextAnim }}
          >
            <Text style={signUpStyles.subContentText}>
              메일 인증이 완료된 후 다음 단계로 넘어갈 수 있습니다.
            </Text>
          </Animated.View>
        </>
      ) : (
        <Animated.View style={{ opacity: mainTextAnim }}>
          <Image
            source={ConfirmGIF}
            style={{
              width: 220,
              height: 220,
              backgroundColor: 'white',
            }}
          />
          <SpaceBox height={50} />
          <Text style={signUpStyles.verifiedText}>메일 인증 성공!</Text>
        </Animated.View>
      )}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mainContentText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 35,
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
  verifiedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  verifiedText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 35,
  },
});
