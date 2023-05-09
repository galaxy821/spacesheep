import SpaceBox from '../../components/common/SpaceBox';
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { PropTypes } from 'prop-types';
import { signUpContent } from '../../values/AuthValue';

const SetProfileContent = ({
  nickname,
  setNickName,
  setCurrentErrorMessage,
  setOpenModal,
  setShowExitButton,
  setCurrentSignUpContent,
}) => {
  const nicknameRef = useRef(null);

  const [viewAnim] = useState(new Animated.Value(0));

  const onSubmitNickname = async () => {
    if (nickname.length === 0) {
      setCurrentErrorMessage('닉네임을 입력해주세요.');
      setOpenModal(true);
      return;
    } else {
      // set nickname by update auth
      //const result = await setNickName(nickname);

      const result = true;
      if (result) {
        fadeOut();
      } else {
        setCurrentErrorMessage('중복되는 닉네임입니다.');
        setOpenModal(true);
      }
    }
  };

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
      setCurrentSignUpContent(signUpContent.WELCOME);
    });
  };

  useEffect(() => {
    const backAction = () => {
      /**nothing event when backbutton press */
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', backAction);

    setShowExitButton(false);
    fadeIn();
    if (nicknameRef.current) {
      nicknameRef.current.focus();
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Animated.View style={{ opacity: viewAnim }}>
      <SpaceBox height={30} />
      <Text style={styles.headerText}>닉네임을 입력하세요.</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          placeholder="spacesheep 닉네임"
          onChangeText={text => setNickName(text)}
          value={nickname}
          returnKeyType={'done'}
          ref={nicknameRef}
          onSubmitEditing={onSubmitNickname}
        />
        <TouchableOpacity style={styles.nextButton} onPress={onSubmitNickname}>
          <Feather name="arrow-right-circle" size={36} color="black" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

SetProfileContent.propTypes = {
  nickname: PropTypes.string.isRequired,
  setNickName: PropTypes.func.isRequired,
  setCurrentErrorMessage: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  //   navigation: PropTypes.object,
  setShowExitButton: PropTypes.func.isRequired,
  setCurrentSignUpContent: PropTypes.func.isRequired,
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
  input: {
    height: 40,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
  },
  nextButton: {
    marginStart: 10,
    marginEnd: 10,
  },
});

export default SetProfileContent;
