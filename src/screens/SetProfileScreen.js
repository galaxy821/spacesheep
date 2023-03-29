import { StyleSheet, Text, View } from 'react-native';

const SetProfileScreen = () => {
  return (
    <View style={setProfileStyles.container}>
      <Text>SetProfileScreen</Text>
    </View>
  );
};

const setProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SetProfileScreen;
