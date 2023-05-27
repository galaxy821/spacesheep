import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { SvgIcon } from '../assets/icons/SvgIcon';
import { useCallback, useRef, useState } from 'react';
// import { Feather } from '@expo/vector-icons';

import Feather from 'react-native-vector-icons/Feather';
import { abs } from 'react-native-reanimated';
Feather.loadFont();

const PLACEHOLDER = 'Search';

/**
 * 검색 바
 * @returns {JSX.Element} 검색 바 컴포넌트
 */
const SearchBar = () => {
  const [value, setValue] = useState('');

  return (
    <>
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
      </View>
    </>
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

export const AutoCompleteSearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [remoteDataSet, setRemoteDataSet] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const dropdownController = useRef(null);

  const searchRef = useRef(null);

  const getSuggestions = useCallback(async q => {
    const filterToken = q.toLowerCase();
    console.log('getSuggestions', filterToken);
    if (typeof q !== 'string' || q.length < 3) {
      setRemoteDataSet(null);
      return;
    }
    setLoading(true);

    // const response = await fetch(
    //   'https://jsonplaceholder.typicode.com/posts'
    // ).then(
    //   data =>
    //     new Promise(res => {
    //       setTimeout(() => res(data), 2000);
    //     })
    // );
    // const items = await response.json();

    const suggestions = items
      .filter(item => item.title.toLowerCase().includes(filterToken))
      .map(item => ({
        id: item.id,
        title: item.title,
      }));

    setRemoteDataSet(suggestions);
    setLoading(false);
  }, []);

  return (
    <View
      style={{
        position: 'relative',
      }}
    >
      <AutocompleteDropdown
        ref={searchRef}
        controller={controller => {
          dropdownController.current = controller;
        }}
        dataSet={remoteDataSet}
        closeOnBlur={false}
        useFilter={false}
        clearOnFocus={false}
        debounce={500}
        onSelectItem={setSelectedItem}
        loading={loading}
        onChangeText={getSuggestions}
        EmptyResultComponent={
          <Text style={{ padding: 15, fontSize: 15 }}>
            검색결과가 없습니다.
          </Text>
        }
        // suggestionsListMaxHeight={200}
        suggestionsListMaxHeight={Dimensions.get('window').height * 0.4}
        containerStyle={{
          /**검색바 전체 컨테이너 스타일*/ flexGrow: 1,
          flexShrink: 1,
          backgroundColor: '#fff',
        }}
        textInputProps={{
          /**검색어 input */ placeholder: '검색어를 입력하세요.',
          style: {
            borderRadius: 20,
            backgroundColor: '#F8f8f8',
            color: '#000',
            height: 45,
          },
        }}
        inputContainerStyle={{
          borderRadius: 20,
          backgroundColor: '#F8f8f8',
          color: '#000',
          paddingLeft: 10,
          marginStart: 10,
          marginEnd: 10,
          height: 45,
        }}
        suggestionsListTextStyle={{
          /**어디 스타일인지 파악 안됨... */ backgroundColor: 'green',
          color: '#8f3c96',
        }}
        suggestionsListContainerStyle={{
          // 추천 keyword 스타일
          backgroundColor: '#fff',
          borderRadius: 20,
          paddingLeft: 10,
        }}
        rightButtonsContainerStyle={{
          // 오른쪽 버튼 스타일
          right: 50,
          height: 30,

          alignSelf: 'center',
        }}
        showChevron={false}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          alignSelf: 'center',
          right: 30,
          top: 15,
        }}
      >
        <SvgIcon.SearchIcon />
      </TouchableOpacity>
    </View>
  );
};

export const AutocompleteSearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // 연관 검색어를 가져오는 함수 (예시에서는 정적인 데이터를 사용)
  const fetchSuggestions = text => {
    // 실제로는 API 호출 등으로 연관 검색어를 가져오는 로직을 구현해야 합니다.
    const suggestions = ['Apple', 'Banana', 'Cherry', 'Durian'].filter(item =>
      item.toLowerCase().startsWith(text.toLowerCase())
    );
    setSuggestions(suggestions);
  };

  const handleSearch = () => {
    // 검색 로직을 수행하는 함수
    console.log('Perform search:', searchText);
  };

  const renderSuggestion = ({ item }) => {
    return (
      <View style={styles.suggestionItem}>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChangeText={text => {
          setSearchText(text);
          fetchSuggestions(text);
        }}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        style={styles.suggestionList}
        data={suggestions}
        renderItem={renderSuggestion}
        keyExtractor={item => item}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  suggestionList: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    maxHeight: 200,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});
