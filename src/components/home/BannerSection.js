import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import Banner from '../Banner';
import { PropTypes } from 'prop-types';

const HOME_BANNER_ROTATION_TIME = 5000;

export const HOME_BANNER_IMAGES = [
  require('../../../assets/dummy/banner/Rectangle206.png'),
  require('../../../assets/dummy/banner/Rectangle207.png'),
  require('../../../assets/dummy/banner/Rectangle208.png'),
];

/**
 * 홈 화면 배너 섹션
 * @component
 * @param {object} props
 * @param {object} bannerItem 홈 화면 배너 아이템
 * @returns {JSX.Element} 홈 화면 배너 섹션 컴포넌트
 */
const BannerSection = ({ bannerItem }) => {
  useEffect(() => {}, []);

  return (
    <View style={BannerSectionStyles.bannerSection}>
      <Banner
        rotationTime={HOME_BANNER_ROTATION_TIME}
        banner_images={HOME_BANNER_IMAGES} // bannerItem
      />
    </View>
  );
};

BannerSection.propTypes = {
  bannerItem: PropTypes.array,
};

export default BannerSection;

const BannerSectionStyles = StyleSheet.create({
  bannerSection: {
    height: 200,
    width: '100%',
    marginHorizontal: 0,
    marginVertical: 7,
  },
});
