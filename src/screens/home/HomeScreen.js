import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import TitleSection from '../../components/home/HomeHeader';
import SearchBar from '../../components/SearchBar';
import Banner from '../../components/Banner';
import InterestSection from '../../components/home/InterestSection';
import SpaceThumbnail from '../../components/\bSpaceThumbnail';
import { CellWrapper, dummyData } from '../../components/home/SpaceListSection';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const renderItem = SpaceThumbnail;

  return (
    <HomeContainer
      safeArea={top}
      bottomBarArea={80}
      bounces={false}
      data={dummyData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={HomeScreenHeader}
      numColumns={3}
      contentContainerStyle={{
        paddingBottom: 80,
      }}
      cellRendererComponent={({ children, item, index, style }) => (
        <CellWrapper index={index} style={style} item={item}>
          {children}
        </CellWrapper>
      )}
    />
  );
};

export default HomeScreen;

const HomeScreenHeader = () => {
  const navigation = useNavigation();

  const handleNoticePress = () => {
    navigation.navigate('Notice');
  };
  return (
    <View style={{ paddingHorizontal: 0 }}>
      <TitleSection onNoticePress={handleNoticePress} />
      <BannerSection />
      <SearchSection />
      <InterestSection />
    </View>
  );
};

const HomeContainer = styled.FlatList`
  padding-top: ${({ safeArea }) => safeArea}px;
  padding-bottom: ${({ bottomBarArea }) => bottomBarArea}px;
  background-color: #fff;
`;

const SearchSection = () => <SearchBar />;

const BannerSection = () => {
  const BannerView = styled.View`
    width: 100%;
    height: 200px;
    margin: 5px 0;
  `;
  return (
    <BannerView>
      <Banner />
    </BannerView>
  );
};
