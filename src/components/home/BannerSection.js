import { StyleSheet, View } from 'react-native';
import { HOME_BANNER_IMAGES } from '../../test/dummy/ImageForHomeBanner';
import Banner from '../Banner';

const HOME_BANNER_ROTATION_TIME = 5000;

/**
 * 홈 화면 배너 섹션
 * @returns {JSX.Element} 홈 화면 배너 섹션 컴포넌트
 */
const BannerSection = () => {
  return (
    <View style={BannerSectionStyles.bannerSection}>
      <Banner
        rotationTime={HOME_BANNER_ROTATION_TIME}
        banner_images={HOME_BANNER_IMAGES}
      />
    </View>
  );
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
