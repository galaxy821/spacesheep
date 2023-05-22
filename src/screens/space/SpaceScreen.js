import { useRoute, useNavigation } from '@react-navigation/native';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import {
  // FlatList,
  Keyboard,
  NativeModules,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { KeyboardAvoidingView, TextInput } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  SafeAreaView,
  // useSafeAreaInsets,
} from 'react-native-safe-area-context';
// import { MessageDummyData } from '../../values/DummyData';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';

import dummydata from '../../../assets/dummy/message/message_dummy.json';
import ChatList from '../../components/space/ChatList';
// import socket from '../../modules/Chat';

const { StatusBarManager } = NativeModules;

const SpaceScreen = () => {
  const [spaceInfo, setSpaceInfo] = useState({ id: 0, name: '' });
  const [messages, setMessages] = useState(null);
  const [input, setInput] = useState('');
  const [messageQueue, setMessageQueue] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();

  const textInputRef = useRef(null);

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

  useEffect(() => {
    Platform.OS == 'ios'
      ? StatusBarManager.getHeight(statusBarFrameData => {
          setStatusBarHeight(statusBarFrameData.height);
        })
      : null;
  }, []);

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
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={statusBarHeight - 50}
        style={{ flex: 1 }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: 10,
            backgroundColor: '#F8F8F8',
          }}
        >
          <TouchableOpacity
            onPress={handleBackPress}
            style={spaceStyles.headerButton}
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          </TouchableOpacity>
          <Text style={spaceStyles.headerText}>{spaceInfo.name}</Text>
          <View style={{ marginRight: 10, width: 35, height: 35 }} />
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {messages ? <ChatList messages={messages} /> : <View></View>}
        </TouchableWithoutFeedback>

        <View
          // style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#F8F8F8',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity style={spaceStyles.textInputContainerButton}>
              <Entypo name="plus" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
              value={input}
              onChangeText={setInput}
              style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 15,
                paddingHorizontal: 10,
                marginLeft: 10,
                marginRight: 10,
                height: 45,
              }}
              ref={textInputRef}
              placeholder="메시지를 입력하세요."
            />
            <TouchableOpacity
              onPress={handleSend}
              style={spaceStyles.textInputContainerButton}
            >
              <Ionicons name="ios-send" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            zIndex: -1,
          }}
        ></View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const spaceStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textInputContainerButton: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    marginLeft: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpaceScreen;
