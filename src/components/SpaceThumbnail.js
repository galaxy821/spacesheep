import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PropTypes } from 'prop-types';
import { AppRoute } from '../navigations/routes';
import { KODDI_FONT_BOLD } from '../assets/fonts/KoddiUOnGothic';

const screenWidth = (Dimensions.get('window').width - 60) / 3;

/**
 * space 채팅방 썸네일
 * @param {object} space space 채팅방 정보
 * @returns {JSX.Element} space 채팅방 썸네일 컴포넌트
 */
const SpaceThumbnail = ({ space }) => {
  const { id, name, image, description, color } = space;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(AppRoute.SPACE, {
          id: id,
          name: name,
        });
      }}
      style={SpaceThumbnailStyle().box}
    >
      <View
        screenWidth={screenWidth}
        style={SpaceThumbnailStyle(screenWidth).content}
      >
        <Image />
      </View>
      <View style={SpaceThumbnailStyle().titleBox}>
        <Text style={SpaceThumbnailStyle().title} numberOfLines={1}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

SpaceThumbnail.propTypes = {
  space: PropTypes.object,
};

export default SpaceThumbnail;

const SpaceThumbnailStyle = screenWidth =>
  StyleSheet.create({
    box: {
      marginBottom: 15,
      marginLeft: 15,
    },
    content: {
      width: screenWidth,
      height: screenWidth,
      borderRadius: 25,
      backgroundColor: '#f1e09b',
    },
    titleBox: {
      paddingLeft: 10,
      marginTop: 5,
    },
    title: {
      fontSize: 14,
      fontFamily: KODDI_FONT_BOLD,
    },
  });
