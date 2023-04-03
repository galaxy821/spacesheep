import { useRef, useState, useEffect } from 'react';
import { FlatList, Image, Dimensions } from 'react-native';
import { PropTypes } from 'prop-types';

const { width } = Dimensions.get('window');

const Banner = ({ rotationTime, banner_images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const newIndex =
          prevIndex === banner_images.length - 1 ? 0 : prevIndex + 1;
        flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
        return newIndex;
      });
    }, rotationTime);

    return () => clearInterval(timer);
  }, [rotationTime, banner_images]);

  return (
    <FlatList
      ref={flatListRef}
      data={banner_images}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <Image source={item} resizeMode="cover" />}
      onMomentumScrollEnd={event => {
        setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / width));
      }}
    />
  );
};

Banner.propTypes = {
  rotationTime: PropTypes.number.isRequired,
  banner_images: PropTypes.array.isRequired,
};

export default Banner;
