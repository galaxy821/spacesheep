import { StyleSheet, Text } from 'react-native';
import { PropTypes } from 'prop-types';
import { KODDI_FONT_BOLD } from '../assets/fonts/KoddiUOnGothic';

const TITLE_TEXT = 'spacesheep';

/**
 * Title
 * @param {number} size text 크기
 * @returns {JSX.Element} Title 컴포넌트
 */
const Title = ({ size }) => {
  return <Text style={TextStyles(size).text}>{TITLE_TEXT}</Text>;
};

Title.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Title;

const TextStyles = size =>
  StyleSheet.create({
    text: {
      fontSize: size,
      fontFamily: KODDI_FONT_BOLD,
      // fontWeight: 'bold',
    },
  });
