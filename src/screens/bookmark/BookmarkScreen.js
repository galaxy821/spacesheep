import { StyleSheet, Text, View } from 'react-native';

const BookmarkScreen = () => {
  return (
    <View style={bookmarkStyles.container}>
      <Text>BookmarkScreen</Text>
    </View>
  );
};

const bookmarkStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookmarkScreen;
