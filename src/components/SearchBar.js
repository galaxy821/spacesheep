import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgIcon } from '../assets/icons/SvgIcon';

const PLACEHOLDER = 'Search';

/**
 * 검색 바
 * @returns {JSX.Element} 검색 바 컴포넌트
 */
const SearchBar = () => (
  <View style={SearchBarStyle.searchBarBox}>
    <TextInput
      placeholder={PLACEHOLDER}
      style={SearchBarStyle.searchBarInput}
    />
    <TouchableOpacity style={SearchBarStyle.searchBarIcon}>
      <SvgIcon.SearchIcon />
    </TouchableOpacity>
  </View>
);

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
