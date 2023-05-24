import { FlatList, StyleSheet, View } from 'react-native';
import { PropTypes } from 'prop-types';
import SpaceThumbnail from '../SpaceThumbnail';
import TitleSection from './HomeHeader';
import SearchBar from '../SearchBar';
import InterestSection from './InterestSection';
import BannerSection from './BannerSection';
import dummyData from '../../../assets/dummy/home/space_info_dummy.json';

const NUM_OF_COLUMNS = 3;
const BOTTOM_TAB_SAFE_AREA = 100;

/**
 * 홈 화면 콘텐츠
 * @param {number} safeArea 상단바 높이
 * @returns {JSX.Element} 홈 화면 콘텐츠 컴포넌트
 */
const HomeContainer = ({ safeArea }) => {
  const renderItem = ({ item }) => <SpaceThumbnail space={item} />;

  return (
    <FlatList
      data={dummyData}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={NUM_OF_COLUMNS}
      ListHeaderComponent={HomeScreenHeader}
      safeArea={safeArea}
      bottomBarArea={BOTTOM_TAB_SAFE_AREA}
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={HomeContainerStyles(BOTTOM_TAB_SAFE_AREA).spaceContentSection}
    />
  );
};

HomeContainer.propTypes = {
  safeArea: PropTypes.number,
};

/**
 * 홈 화면 헤더
 * @returns {JSX.Element} 홈 화면 헤더 컴포넌트
 */
const HomeScreenHeader = () => {
  return (
    <View>
      <TitleSection />
      <BannerSection />
      <SearchBar />
      <InterestSection />
    </View>
  );
};

export default HomeContainer;

const HomeContainerStyles = bottomBarArea =>
  StyleSheet.create({
    spaceContentSection: {
      backgroundColor: '#fff',
      paddingBottom: bottomBarArea,
    },
  });
