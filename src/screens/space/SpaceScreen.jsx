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
// import socket from '../../modules/Chat';

// const { StatusBarManager } = NativeModules;

const SpaceScreen = () => {
  const [spaceInfo, setSpaceInfo] = useState({ id: 0, name: '' });
  const [messages, setMessages] = useState(null);
  const [input, setInput] = useState('');

  const navigation = useNavigation();
  const route = useRoute();

  // const { safeArea } = useSafeAreaInsets();
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSend = () => {
    // Add the message to the messages array
    if (input === '') return;

    const newMessage = {
      message_id: messages.length + 100,
      message: input,
      user_id: 23214,
    };
    setMessages([newMessage, ...messages]);
    // Clear the input field
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

  const [statusBarHeight, setStatusBarHeight] = useState(0);

  useEffect(() => {
    setSpaceInfo({
      id: route.params.id,
      name: route.params.name,
    });
    setMessages(dummydata);
  }, [route.params]);

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
          handleSend={handleSend}
          handleBackPress={handleBackPress}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SpaceScreen;
