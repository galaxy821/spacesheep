import { StyleSheet, Text, View } from 'react-native';

function ProfileScreen() {
  return (
    <View style={profileStyles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
}

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
