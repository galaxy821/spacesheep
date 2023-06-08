import { FlatList, Platform, StyleSheet, View } from 'react-native';
import { PropTypes } from 'prop-types';
import SpaceThumbnail from '../SpaceThumbnail';
import TitleSection from './HomeHeader';
import SearchBar, {
  AutoCompleteSearchBar,
  AutocompleteSearchBar,
} from '../SearchBar';
import InterestSection from './InterestSection';
import BannerSection from './BannerSection';
import dummyData from '../../../assets/dummy/home/space_info_dummy.json';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';

const NUM_OF_COLUMNS = 3;
const BOTTOM_TAB_SAFE_AREA = 100;

/**
 * 홈 화면 콘텐츠
 * @component
 * @param {object} props
 * @param {number} safeArea 상단바 높이
 * @param {string} currentInterest 현재 선택된 관심사
 * @param {function} setCurrentInterest 현재 선택된 관심사 변경 함수
 * @param {object} bannerItem 홈 화면 배너 아이템
 * @param {object} subject 홈 화면 관심 주제 리스트
 * @param {object} spaces 홈 화면 공간 리스트
 * @returns {JSX.Element} 홈 화면 콘텐츠 컴포넌트
 */
const HomeContainer = ({
  safeArea,
  currentInterest,
  setCurrentInterest,
  bannerItem,
  subject,
  spaces,
}) => {
  const renderItem = ({ item }) => <SpaceThumbnail space={item} />;

  return (
    <View>
      <FlatList
        data={dummyData} // spaces
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={NUM_OF_COLUMNS}
        ListHeaderComponent={() => (
          <HomeScreenHeader
            currentInterest={currentInterest}
            setCurrentInterest={setCurrentInterest}
            bannerItem={bannerItem}
            subject={subject}
          />
        )}
        // safeArea={safeArea}
        // bottomBarArea={BOTTOM_TAB_SAFE_AREA}
        showsVerticalScrollIndicator={false}
        bounces={false}
        // keyboardShouldPersistTaps="always"
        style={HomeContainerStyles(BOTTOM_TAB_SAFE_AREA).spaceContentSection}
      />
    </View>
  );
};

HomeContainer.propTypes = {
  safeArea: PropTypes.number,
  currentInterest: PropTypes.string,
  setCurrentInterest: PropTypes.func,
  bannerItem: PropTypes.array,
  subject: PropTypes.array,
  spaces: PropTypes.array,
};

/**
 * 홈 화면 헤더
 * @component
 * @param {object} props
 * @param {string} currentInterest 현재 선택된 관심사
 * @param {function} setCurrentInterest 현재 선택된 관심사 변경 함수
 * @param {object} bannerItem 홈 화면 배너 아이템
 * @param {object} subject 홈 화면 관심 주제 리스트
 * @returns {JSX.Element} 홈 화면 헤더 컴포넌트
 */
const HomeScreenHeader = ({
  currentInterest,
  setCurrentInterest,
  bannerItem,
  subject,
}) => {
  return (
    <View>
      <TitleSection />
      <BannerSection bannerItem={bannerItem} />
      <View
        style={[
          HomeContainerStyles.section,
          Platform.select({ ios: { zIndex: 1 } }),
        ]}
      >
        <AutoCompleteSearchBar />
      </View>
      <InterestSection
        currentInterest={currentInterest}
        setCurrentInterest={setCurrentInterest}
        subject={subject}
      />
    </View>
  );
};

HomeScreenHeader.propTypes = {
  currentInterest: PropTypes.string,
  setCurrentInterest: PropTypes.func,
  bannerItem: PropTypes.array,
  subject: PropTypes.array,
};

export default HomeContainer;

const HomeContainerStyles = bottomBarArea =>
  StyleSheet.create({
    spaceContentSection: {
      backgroundColor: '#fff',
      paddingBottom: bottomBarArea,
    },
    section: {
      marginBottom: 40,
      backgroundColor: '#fff',
    },
  });
