import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Animated } from 'react-native';
import SpaceBox from '../../components/common/SpaceBox';
import { useNavigation } from '@react-navigation/native';
import { BottomBarRoute } from '../../navigations/routes';
import { PropTypes } from 'prop-types';

const welcome_animation = require('../../../assets/welcome_animation.webp');

/**
 * 회원가입 환영 콘탠츠
 * @param {object} props 컴포넌트 props
 * @returns {JSX.Element} 회원가입 환영 콘텐츠 컴포넌트
 */
const WelcomeContent = ({ nickname }) => {
  const navigation = useNavigation();
  const [viewAnim] = useState(new Animated.Value(0));

  const fadeIn = () => {
    Animated.timing(viewAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const onPress = () => {
    navigation.goBack();
    navigation.reset({
      index: 0,
      routes: [{ name: BottomBarRoute.HOME }],
    });
  };

  useEffect(() => {
    fadeIn();
    //eslint-disable-next-line
  }, []);

  return (
    <Animated.View style={{ opacity: viewAnim }}>
      <SpaceBox height={30} />
      <Text style={styles.headerText}>{nickname}님,</Text>
      <Text style={styles.headerText}>spacesheep 가입을 축하합니다!</Text>
      <SpaceBox height={40} />
      <View style={styles.imageContentView}>
        <Image style={styles.animationImmage} source={welcome_animation} />
      </View>

      <SpaceBox height={40} />
      <Text style={styles.subText}>
        spacesheep에서 다양한 이야기를 나눠보세요!
      </Text>
      <SpaceBox height={10} />
      <TouchableOpacity style={styles.nextButton} onPress={onPress}>
        <Text style={styles.nextButtonText}>시작하기</Text>
        <Feather name="arrow-right-circle" size={36} color="black" />
      </TouchableOpacity>
    </Animated.View>
  );
};

WelcomeContent.propTypes = {
  nickname: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
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
  subText: {
    fontSize: 18,
    marginBottom: 20,
    lineHeight: 22,
    textAlign: 'center',
  },
  input: {
    height: 40,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
  },
  nextButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 10,
    marginEnd: 10,
  },
  nextButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginEnd: 10,
  },
  imageContentView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationImmage: {
    width: 150,
    height: 300,
  },
});

export default WelcomeContent;
