import { Text, View } from 'react-native';
import { PropTypes } from 'prop-types';

const ChatMessage = ({ item, isMine }) => {
  return (
    <View
      style={{
        alignSelf: isMine ? 'flex-end' : 'flex-start',
        padding: 10,
        paddingHorizontal: 15,
        color: isMine ? 'white' : 'black',
        backgroundColor: isMine ? '#0084FF' : '#E8E8E8',
        fontSize: 16,
        borderRadius: 15,
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          color: isMine ? 'white' : 'black',
          backgroundColor: isMine ? '#0084FF' : '#E8E8E8',
          fontSize: 16,
        }}
      >
        {item.message}
      </Text>
    </View>
  );
};

ChatMessage.propTypes = {
  item: PropTypes.object.isRequired,
  isMine: PropTypes.bool.isRequired,
};

export default ChatMessage;
