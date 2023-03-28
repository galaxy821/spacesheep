import { StyleSheet, Text, View } from 'react-native';

const SearchResultScreen = () => {
  return (
    <View style={searchResultStyles.container}>
      <Text>SearchResultScreen</Text>
    </View>
  );
};

const searchResultStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchResultScreen;
