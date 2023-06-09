import { useRoute, useNavigation } from '@react-navigation/native';
import { useState, useEffect, useLayoutEffect } from 'react';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import {
  SafeAreaView,
  // useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

import dummydata from '../../../assets/dummy/message/message_dummy.json';
import ChatContainer from '../../components/space/ChatContainer';
// import socket, { socketFunctions, socketWithUser } from '../../modules/Chat';
import { useRecoilState } from 'recoil';
import { authStoreSelector } from '../../store/Auth';
// const { StatusBarManager } = NativeModules;

const SpaceScreen = () => {
  const [spaceInfo, setSpaceInfo] = useState({ id: 0, name: '' });
  const [messages, setMessages] = useState(null);
  const [input, setInput] = useState('');

  const navigation = useNavigation();
  const route = useRoute();

  // const { safeArea } = useSafeAreaInsets();
  // eslint-disable-next-line
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  const userToken = useRecoilState(authStoreSelector);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const onSendMessage = () => {
    // 메시지 전송
    if (input === '') return;

    const newMessage = {
      message_id: messages.length + 100,
      message: input,
      user_id: 23214,
    };

    // socketFunctions.sendMessage(newMessage); // 서버에 메시지 전송
    setMessages([newMessage, ...messages]); // 임시로 메시지 추가

    setInput('');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: spaceInfo.name,
      headerLeft: () => (
        <TouchableOpacity onPress={handleBackPress} style={{ marginLeft: 10 }}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
    //eslint-disable-next-line
  }, [navigation, spaceInfo]);

  // useEffect(() => {
  //   Platform.OS == 'ios'
  //     ? StatusBarManager.getHeight(statusBarFrameData => {
  //         setStatusBarHeight(statusBarFrameData.height);
  //       })
  //     : null;
  // }, []);

  useEffect(() => {
    // 채팅방 입장 시 방 정보 설정 및 소켓 연결
    setSpaceInfo({
      id: route.params.id,
      name: route.params.name,
    });
    setMessages(dummydata);

    /**room 개념으로 할지, 아니면 nampespace으로 할지 추후 백엔드 구현 후 결정 예정 : 현재는 namespace으로 설정*/
    /*
    if(userToken.accessToken !== null){ // 로그인 상태일 때
      socketWithUser(userToken.accessToken, route.params.id).connect();
    }
    else{ // 비로그인 상태일 때
      socket(route.params.id).connect();
    }*/
  }, [route.params, userToken]);

  /* socket message 리스너
  useEffect(() => {
    const messageHandler = message => {
      setMessages([message, ...messages]);
    };

    socket.on('message', messageHandler);

    return () => {
      socket.off('message', messageHandler);
    };
  }, [messages]);
  */

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F8F8F8',
      }}
    >
      <KeyboardAvoidingView
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        behavior={'padding'}
        keyboardVerticalOffset={statusBarHeight - 50}
        style={{ flex: 1 }}
      >
        <ChatContainer
          spaceInfo={spaceInfo}
          messages={messages}
          input={input}
          setInput={setInput}
          onSendMessage={onSendMessage}
          handleBackPress={handleBackPress}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SpaceScreen;
