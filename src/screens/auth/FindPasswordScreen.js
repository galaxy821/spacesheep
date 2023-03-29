import { StyleSheet, Text, View } from 'react-native';

const FindPasswordScreen = () => {
  return (
    <View style={findPasswordStyles.container}>
      <Text>findPasswordScreen</Text>
    </View>
  );
};

const findPasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FindPasswordScreen;
