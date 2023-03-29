import { StyleSheet, Text, View } from 'react-native';

const SpaceScreen = () => {
  return (
    <View style={spaceStyles.container}>
      <Text>SpaceScreen</Text>
    </View>
  );
};

const spaceStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

export default SpaceScreen;
