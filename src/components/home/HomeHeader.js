import { TouchableOpacity } from 'react-native';
import NoticeIcon from '../icons/NoticeIcon';
import { useNavigation } from '@react-navigation/native';
import { AppRoute } from '../../navigations/routes';
import { Title, TitleContainer } from '../../styles/HomeStyle';
import { HOME_TITLE_TEXT } from '../../values/HomeValue';

const TitleSection = () => {
  const navigation = useNavigation();

  const onNoticePress = () => {
    navigation.navigate(AppRoute.NOTICE);
  };

  return (
    <TitleContainer>
      <Title>{HOME_TITLE_TEXT}</Title>
      <TouchableOpacity onPress={onNoticePress}>
        <NoticeIcon />
      </TouchableOpacity>
    </TitleContainer>
  );
};

export default TitleSection;
