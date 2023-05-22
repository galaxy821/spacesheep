import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';

/**
 * 관심사 선택 버튼
 * @param {string} title 관심사 이름
 * @returns 관심사 선택 버튼 컴포넌트
 */
const InterestButton = ({ title }) => {
  return (
    <TouchableOpacity style={InterestButtonStyle.buttonBox}>
      <Text style={InterestButtonStyle.buttonContent}>{title}</Text>
    </TouchableOpacity>
  );
};

InterestButton.propTypes = {
  title: PropTypes.string,
};

export default InterestButton;

const InterestButtonStyle = StyleSheet.create({
  buttonBox: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    marginEnd: 7,
    marginBottom: 7,
    justifyContent: 'center',
  },
  buttonContent: {
    fontSize: 14,
  },
});
