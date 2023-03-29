import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={homeStyles.container}>
      <Text>HomeScreen</Text>
      <Button title="button"></Button>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default HomeScreen;
