import { StyleSheet, Text, View } from 'react-native';

const PostMessageScreen = () => {
  return (
    <View style={postMessageStyles.container}>
      <Text>PostMessageScreen</Text>
    </View>
  );
};

const postMessageStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostMessageScreen;
