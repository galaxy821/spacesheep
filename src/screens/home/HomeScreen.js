import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import HomeContainer from '../../components/home/HomeContainer';
import { StyleSheet, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import {
  getBannerItem,
  getInterestSubjectItem,
  getSpacesInfo,
} from '../../modules/Home';

/**
 * 홈 화면
 * @returns {JSX.Element} 홈 화면 컴포넌트
 */
const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const [currentInterest, setCurrentInterest] = useState(null);
  const [bannerItem, setBannerItem] = useState([]);
  const [subject, setSubject] = useState([]);
  const [spaces, setSpaces] = useState([]);

  const getBanners = useCallback(async () => {
    const data = await getBannerItem();
    if (data !== null) {
      setBannerItem(data);
    } else {
      setBannerItem([]);
    }
  }, [setBannerItem]);

  const getInterestSubject = useCallback(async () => {
    const data = await getInterestSubjectItem();
    if (data !== null) {
      setSubject(data);
    } else {
      setSubject([]);
    }
  }, [setSubject]);

  const getSpaces = useCallback(
    async currentInterest => {
      if (currentInterest === null) {
        const data = await getSpacesInfo();
        if (data !== null) {
          setSpaces(data);
        } else {
          setSpaces([]);
        }
      } else {
        const data = await getSpacesInfo(currentInterest);
        if (data !== null) {
          setSpaces(data);
        } else {
          setSpaces([]);
        }
      }
    },
    [setSpaces]
  );

  /**
   * HomeScreen 마운트 시, 배너 아이템, 관심사 아이템, Space 정보 요청
   */
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('HomeScreen useEffect([])');
    // getBanners();
    // getInterestSubject();
    // getSpaces(currentInterest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * 관심사 변경 시, 해당 관심사에 해당하는 Space 정보 요청
   */
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('HomeScreen useEffect([getSpaces, currentInterest])');
    // getSpaces(currentInterest);
  }, [getSpaces, currentInterest]);

  return (
    <>
      <StatusBar style="dark" />
      <View style={HomeScreenStyles(top).statusBar} />
      <HomeContainer
        safeArea={top}
        currentInterest={currentInterest}
        setCurrentInterest={setCurrentInterest}
        bannerItem={bannerItem}
        subject={subject}
        spaces={spaces}
      />
    </>
  );
};

export default HomeScreen;

const HomeScreenStyles = safeArea =>
  StyleSheet.create({
    statusBar: {
      backgroundColor: '#fff',
      height: safeArea,
    },
  });
