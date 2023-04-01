import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import SearchIcon from './icons/SearchIcon';

const SearchBar = () => (
  <View style={styles.container}>
    <TextInput placeholder="Search" style={styles.textInput} />
    <TouchableOpacity style={styles.searchButton}>
      <SearchIcon />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 0,
    borderColor: 'gray',
    paddingLeft: 20,
    paddingRight: 50,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#F8F8F8',
  },
  searchButton: {
    position: 'absolute',
    right: 30,
  },
});

export default SearchBar;
