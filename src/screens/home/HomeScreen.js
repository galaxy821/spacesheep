import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import HomeContainer from '../../components/home/HomeContainer';
import { StatusBox } from '../../styles/DefaultStyle';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="dark" />
      <StatusBox safeArea={top} />
      <HomeContainer safeArea={top} />
    </>
  );
};

export default HomeScreen;
