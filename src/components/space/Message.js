import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

const Message = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    maxWidth: '75%',
  },
  text: {
    color: 'white',
  },
});

export default Message;
