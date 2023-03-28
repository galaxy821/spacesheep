import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigations/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style='dark'/> */}
      <Text style={{ fontSize: 30 }}>Spacesheep</Text>
      <StatusBar style="auto" />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});