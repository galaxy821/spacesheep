import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
// import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { SvgIcon } from '../assets/icons/SvgIcon';
import { useEffect, useState } from 'react';

const PLACEHOLDER = 'Search';

/**
 * 검색 바
 * @returns {JSX.Element} 검색 바 컴포넌트
 */
const SearchBar = () => {
  const [value, setValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    console.log(value);
  }, [value]);

  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  return (
    <View style={SearchBarStyle.searchBarBox}>
      <TextInput
        placeholder={PLACEHOLDER}
        value={value}
        onChangeText={setValue}
        style={SearchBarStyle.searchBarInput}
      />
      <TouchableOpacity style={SearchBarStyle.searchBarIcon}>
        <SvgIcon.SearchIcon />
      </TouchableOpacity>
      {/* <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        initialValue={{ id: '2' }} // or just '2'
        onSelectItem={setSelectedItem}
        dataSet={[
          { id: '1', title: 'Alpha' },
          { id: '2', title: 'Beta' },
          { id: '3', title: 'Gamma' },
        ]}
      /> */}
      ;
    </View>
  );
};

export default SearchBar;

const SearchBarStyle = StyleSheet.create({
  searchBarBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  searchBarInput: {
    borderWidth: 0,
    paddingEnd: 50,
    paddingStart: 20,
    height: 45,
    width: '100%',
    borderRadius: 25,
    backgroundColor: '#f8f8f8',
  },
  searchBarIcon: {
    position: 'absolute',
    right: 20,
  },
});
