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
import { LinearGradient } from 'react-native-svg';

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
      {/* <LinearGradient colors={['#FF9800', '#FF5722']} style={{ flex: 1 }}> */}
      <View
        screenWidth={screenWidth}
        style={SpaceThumbnailStyle(screenWidth, color).content}
      >
        <Image />
      </View>
      {/* </LinearGradient> */}
      <View style={SpaceThumbnailStyle(screenWidth).titleBox}>
        <Text
          style={SpaceThumbnailStyle().title}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
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

const SpaceThumbnailStyle = (screenWidth, color) =>
  StyleSheet.create({
    box: {
      marginBottom: 15,
      marginLeft: 15,
    },
    content: {
      width: screenWidth,
      height: screenWidth,
      borderRadius: 25,
      backgroundColor: color,
    },
    titleBox: {
      paddingLeft: 10,
      marginTop: 5,
      width: screenWidth,
      display: 'flex',
      paddingRight: 10,
    },
    title: {
      fontSize: 14,
      width: screenWidth,
      fontFamily: KODDI_FONT_BOLD,
      flexWrap: 'wrap',
    },
  });
