import { StyleSheet, Text, View } from 'react-native';

const SpaceSettingScreen = () => {
  return (
    <View style={spaceSettingStyles.container}>
      <Text>SpaceSettingScreen</Text>
    </View>
  );
};

const spaceSettingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

export default SpaceSettingScreen;
