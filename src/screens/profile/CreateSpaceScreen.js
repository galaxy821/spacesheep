import { StyleSheet, Text, View } from 'react-native';

const CreateSpaceScreen = () => {
  return (
    <View style={createSpaceStyles.container}>
      <Text>CreateSpaceScreen</Text>
    </View>
  );
};

const createSpaceStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateSpaceScreen;
