import {
  // Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { SvgIcon } from '../assets/icons/SvgIcon';
import { useCallback, useRef, useState } from 'react';
import dummyData from '../../assets/dummy/home/keyword_dummy.json';
import { useNavigation } from '@react-navigation/native';
import { AppRoute } from '../navigations/routes';
import { getSearchSpacesInfo } from '../modules/Search';

const PLACEHOLDER = '검색어를 입력해주세요.';

export const AutoCompleteSearchBar = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [remoteDataSet, setRemoteDataSet] = useState(null);
  // const [selectedItem, setSelectedItem] = useState(null);

  const dropdownController = useRef(null);

  const searchRef = useRef(null);

  const onSelectedItem = item => {
    // console.log('onSelectedItem', item);
    if (item != null) {
      // console.log('onselectedItem, move to chat');
      dropdownController.current.close();
      searchRef.current.clear();
      navigation.navigate(AppRoute.SPACE, {
        id: item.id,
        name: item.name,
      });
    }
  };

  // const onBlur = useCallback(() => {
  //   dropdownController.current.close();
  //   searchRef.current.clear();
  // }, []);

  const getSuggestions = useCallback(async q => {
    const filterToken = q.toLowerCase();
    if (typeof q !== 'string' || q.length < 3) {
      setRemoteDataSet(null);
      return;
    }
    setLoading(true);

    /* 검색 api 호출
    const result = await getSearchSpacesInfo(filterToken);
    if(result != null){
      const suggestions = result
        .filter(item => item.name.toLowerCase().includes(filterToken))
        .map(item => ({
          id: item.id,
          name: item.name,
        }));
      setRemoteDataSet(suggestions);
    }
    */

    const suggestions = dummyData
      .filter(item => item.name.toLowerCase().includes(filterToken))
      .map(item => ({
        id: item.id,
        name: item.name,
      }));

    setRemoteDataSet(suggestions);
    setLoading(false);
  }, []);

  return (
    <View style={SearchBarStyle.container}>
      <AutocompleteDropdown
        ref={searchRef}
        loading={loading}
        dataSet={remoteDataSet}
        debounce={500}
        controller={controller => {
          dropdownController.current = controller;
        }}
        closeOnBlur={true}
        useFilter={false}
        clearOnFocus={false}
        onSelectItem={onSelectedItem}
        onChangeText={getSuggestions}
        // onBlur={onBlur}
        EmptyResultComponent={
          <Text style={{ padding: 15, fontSize: 15 }}>
            검색결과가 없습니다.
          </Text>
        }
        renderItem={item => (
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 15, color: '#000' }}>{item.name}</Text>
          </View>
        )}
        // suggestionsListMaxHeight={200}
        suggestionsListMaxHeight={
          // Dimensions.get('window').height * 0.1
          145
        }
        containerStyle={
          SearchBarStyle.innerContainer
        } /* Auto Complete 컨테이너 */
        textInputProps={{
          placeholder: PLACEHOLDER,
          style: SearchBarStyle.textInput,
        }} /* 검색바 testInput */
        inputContainerStyle={
          SearchBarStyle.inputContainer
        } /* 검색바 외부 컨테이너 */
        suggestionsListTextStyle={
          SearchBarStyle.keywordText
        } /**어디 스타일인지 파악 안됨... */
        suggestionsListContainerStyle={
          SearchBarStyle.keywordContainer
        } /* 추천 keyword 컨터이너 */
        rightButtonsContainerStyle={
          SearchBarStyle.rightButton
        } /* 오른쪽 버튼 */
        showChevron={false}
      />
      <TouchableOpacity style={SearchBarStyle.searchButton}>
        <SvgIcon.SearchIcon />
      </TouchableOpacity>
    </View>
  );
};

const SearchBarStyle = StyleSheet.create({
  container: {
    position: 'relative',
  },
  innerContainer: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    borderRadius: 20,
    backgroundColor: '#F8f8f8',
    color: '#000',
    paddingLeft: 10,
    marginStart: 10,
    marginEnd: 10,
    height: 45,
  },
  keywordContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 10,
    // position: 'absolute',
    // top: '-10%',
    // backgroundColor: '#fff',
  },
  textInput: {
    borderRadius: 20,
    backgroundColor: '#F8f8f8',
    color: '#000',
    height: 45,
  },
  keywordText: {
    color: '#8f3c96',
  },
  rightButton: {
    right: 50,
    height: 30,
    alignSelf: 'center',
  },
  searchButton: {
    position: 'absolute',
    alignSelf: 'center',
    right: 30,
    top: 15,
  },
});
