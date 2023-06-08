import { PropTypes } from 'prop-types';
import { useEffect, useRef } from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChatMessage from './Message';

const ChatList = ({ messages }) => {
  const flatListRef = useRef(null);
  const { safeArea } = useSafeAreaInsets();

  useEffect(() => {
    flatListRef.current.scrollToOffset({
      offset: 0,
      animated: true,
    });
    // .scrollToEnd();
  }, [messages]);

  return (
    <FlatList
      ref={flatListRef}
      onContentSizeChange={() =>
        flatListRef.current.scrollToOffset({
          offset: 0,
          animated: true,
        })
      }
      //   onLayout={() => flatListRef.current.scrollToEnd()}
      inverted={true}
      initialNumToRender={messages.length >= 10 ? 10 : messages.length}
      safeArea={safeArea}
      style={{
        height: 200,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 0,

        // display: 'flex',
      }}
      directionalLockEnabled={true}
      //   scrollToEnd={true}
      contentContainerStyle={{ paddingBottom: 10 }}
      data={messages}
      keyExtractor={item => item.message_id}
      //   initialNumToRender={messages.length}
      // inverted={true}
      // initialScrollIndex={messages.length - 1}
      // getItemLayout={(data, index) => ({
      //   offset: 56 * index,
      //   index,
      // })}
      // initialScrollIndex={messages.length - 1}
      // getItemLayout={(data, index) => {
      //   const itemHeight = 56;
      //   return {
      //     length: itemHeight,
      //     offset: itemHeight * index,
      //     index,
      //   };
      // }}
      renderItem={({ item }) =>
        item.user_id == '23214' ? (
          <ChatMessage item={item} isMine={true} />
        ) : (
          <ChatMessage item={item} isMine={false} />
        )
      }
    />
  );
};

ChatList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default ChatList;
