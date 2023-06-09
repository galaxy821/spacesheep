import { useRef } from 'react';
import { PropTypes } from 'prop-types';
import {
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import ChatList from './ChatList';
// import socket from '../../modules/Chat';

const ChatContainer = ({
  spaceInfo,
  messages,
  input,
  setInput,
  onSendMessage,
  handleBackPress,
}) => {
  const textInputRef = useRef(null);

  return (
    <>
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
          style={chatContainerStyle.headerButton}
        >
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
        <Text style={chatContainerStyle.headerText}>{spaceInfo.name}</Text>
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
          <TouchableOpacity style={chatContainerStyle.textInputContainerButton}>
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
            onPress={onSendMessage}
            style={chatContainerStyle.textInputContainerButton}
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
    </>
  );
};

ChatContainer.propTypes = {
  spaceInfo: PropTypes.object.isRequired,
  messages: PropTypes.array,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  onSendMessage: PropTypes.func.isRequired,
  handleBackPress: PropTypes.func.isRequired,
};

const chatContainerStyle = StyleSheet.create({
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
  textInputContainerButton: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatContainer;
