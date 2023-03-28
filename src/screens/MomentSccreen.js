import { StyleSheet, Text, View } from 'react-native';

const MomentScreen = () => {
  return (
    <View style={momentStyles.container}>
      <Text>MomentScreen</Text>
    </View>
  );
};

const momentStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MomentScreen;
