import { StyleSheet, Text, View } from 'react-native';

const ProfileSettingScreen = () => {
  return (
    <View style={profileSettingStyles.container}>
      <Text>profileSettingScreen</Text>
    </View>
  );
};

const profileSettingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

export default ProfileSettingScreen;
