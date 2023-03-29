import { StatusBar } from 'expo-status-bar';
import RootNavigator from './navigations/RootNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RootNavigator />
    </>
  );
}
