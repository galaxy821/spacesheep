import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import HomeContainer from '../../components/home/HomeContainer';
import { StyleSheet, View } from 'react-native';

/**
 * 홈 화면
 * @returns {JSX.Element} 홈 화면 컴포넌트
 */
const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="dark" />
      <View style={HomeScreenStyles(top).statusBar} />
      <HomeContainer safeArea={top} />
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
