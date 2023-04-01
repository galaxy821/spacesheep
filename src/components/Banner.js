import React, { useRef, useState, useEffect } from 'react';
import { View, FlatList, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const BANNER_IMAGES = [
  require('../../assets/dummy/banner/Rectangle206.png'),
  require('../../assets/dummy/banner/Rectangle207.png'),
  require('../../assets/dummy/banner/Rectangle208.png'),
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const newIndex =
          prevIndex === BANNER_IMAGES.length - 1 ? 0 : prevIndex + 1;
        flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <FlatList
      ref={flatListRef}
      data={BANNER_IMAGES}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <Image
          source={item}
          style={{ width, height: 200 }}
          resizeMode="cover"
        />
      )}
      onMomentumScrollEnd={event => {
        setCurrentIndex(Math.round(event.nativeEvent.contentOffset.x / width));
      }}
    />
  );
};

export default Banner;
