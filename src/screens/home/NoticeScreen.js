import { StyleSheet, Text, View } from 'react-native';

const NoticeScreen = () => {
  return (
    <View style={noticeStyles.container}>
      <Text>NoticeScreen</Text>
    </View>
  );
};

const noticeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoticeScreen;
