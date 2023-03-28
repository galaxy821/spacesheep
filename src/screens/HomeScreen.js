import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={homeStyles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
