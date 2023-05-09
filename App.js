import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';
import RootNavigator from './src/navigations/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <StatusBar style="dark" />
        <RootNavigator />
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
