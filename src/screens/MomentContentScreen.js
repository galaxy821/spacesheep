import { StyleSheet, Text, View } from 'react-native';

const MomentContentScreen = () => {
  return (
    <View style={momentContentStyles.container}>
      <Text>MomentContentScreen</Text>
    </View>
  );
};

const momentContentStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MomentContentScreen;
