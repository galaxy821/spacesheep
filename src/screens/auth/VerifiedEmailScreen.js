import { StyleSheet, Text, View } from 'react-native';

const VerifiedEmailScreen = () => {
  return (
    <View style={verifiedEmailStyles.container}>
      <Text>VerifiedEmailScreen</Text>
    </View>
  );
};

const verifiedEmailStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VerifiedEmailScreen;
