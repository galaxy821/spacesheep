import { StyleSheet, Text, View } from 'react-native';
import { AutoCompleteSearchBar } from '../../components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';

const MomentScreen = () => {
  // const [query, setQuery] = useState();
  // const data = ['1', '2',];
  return (
    <SafeAreaView>
      <AutocompleteDropdownContextProvider>
        <View style={momentStyles.container}>
          <Text>MomentScreen</Text>

          <AutoCompleteSearchBar />

          {/* <Autocomplete
      data={data}
      value={query}
      onChangeText={(text) => this.setState({ query: text })}
      flatListProps={{
        keyExtractor: (_, idx) => idx,
        renderItem: ({ item }) => <Text>{item}</Text>,
      }}
    /> */}
        </View>
      </AutocompleteDropdownContextProvider>
    </SafeAreaView>
  );
};

const momentStyles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default MomentScreen;
