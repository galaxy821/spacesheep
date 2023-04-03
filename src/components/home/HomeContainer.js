import { HomeBannerView, HomeFlatList } from '../../styles/HomeStyle';
import SpaceThumbnail from '../SpaceThumbnail';
import { View } from 'react-native';
import TitleSection from './HomeHeader';
import SearchBar from '../SearchBar';
import Banner from '../Banner';
import InterestSection from './InterestSection';
import { HOME_BANNER_IMAGES } from '../../test/dummy/ImageForHomeBanner';
import { PropTypes } from 'prop-types';
import {
  BOTTOM_TAB_SAFE_AREA,
  HOME_BANNER_ROTATION_TIME,
  NUM_OF_COLUMNS,
} from '../../values/HomeValue';
import { dummyData } from '../../test/dummy/SpaceThumbnailData';

const HomeContainer = ({ safeArea }) => {
  const renderItem = ({ item }) => <SpaceThumbnail space={item} />;

  return (
    <HomeFlatList
      safeArea={safeArea}
      bottomBarArea={BOTTOM_TAB_SAFE_AREA}
      bounces={false}
      data={dummyData}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={HomeScreenHeader}
      showsVerticalScrollIndicator={false}
      numColumns={NUM_OF_COLUMNS}
    />
  );
};

HomeContainer.propTypes = {
  safeArea: PropTypes.number,
};

const HomeScreenHeader = () => {
  return (
    <View>
      <TitleSection />
      <BannerSection />
      <SearchSection />
      <InterestSection />
    </View>
  );
};

const SearchSection = () => <SearchBar />;

const BannerSection = () => {
  return (
    <HomeBannerView>
      <Banner
        rotationTime={HOME_BANNER_ROTATION_TIME}
        banner_images={HOME_BANNER_IMAGES}
      />
    </HomeBannerView>
  );
};

export default HomeContainer;
