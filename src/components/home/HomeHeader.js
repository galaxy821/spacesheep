import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppRoute } from '../../navigations/routes';
import { SvgIcon } from '../../assets/icons/SvgIcon';
import { KODDI_FONT_BOLD } from '../../assets/fonts/KoddiUOnGothic';

const HOME_TITLE_TEXT = 'spacesheep';

/**
 * 홈 화면 상단 타이틀 바
 * @returns {JSX.Element} 홈 화면 상단 타이틀 바 컴포넌트
 */
const TitleSection = () => {
  const navigation = useNavigation();

  const onNoticePress = () => {
    navigation.navigate(AppRoute.NOTICE);
  };

  return (
    <View style={HomeHeaderStyles.titleContainer}>
      <Text style={HomeHeaderStyles.title}>{HOME_TITLE_TEXT}</Text>
      <TouchableOpacity onPress={onNoticePress}>
        <SvgIcon.NoticeIcon />
      </TouchableOpacity>
    </View>
  );
};

export default TitleSection;

const HomeHeaderStyles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 23,
    fontFamily: KODDI_FONT_BOLD,
    fontWeight: 'bold',
  },
});
