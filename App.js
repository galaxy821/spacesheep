import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';
import RootNavigator from './src/navigations/RootNavigator';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';

export default function App() {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <AutocompleteDropdownContextProvider>
          <StatusBar style="dark" />
          <RootNavigator />
        </AutocompleteDropdownContextProvider>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
