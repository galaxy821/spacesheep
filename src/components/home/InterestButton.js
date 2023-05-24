import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';

/**
 * 관심사 선택 버튼
 * @param {string} title 관심사 이름
 * @returns 관심사 선택 버튼 컴포넌트
 */
const InterestButton = ({ title, currentInterest, setCurrentInterest }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (currentInterest === title) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [title, currentInterest]);

  return (
    <TouchableOpacity
      style={InterestButtonStyle(isSelected).buttonBox}
      onPress={() => {
        setCurrentInterest(title);
      }}
    >
      <Text style={InterestButtonStyle(isSelected).buttonContent}>{title}</Text>
    </TouchableOpacity>
  );
};

InterestButton.propTypes = {
  title: PropTypes.string,
  setCurrentInterest: PropTypes.func,
};

export default InterestButton;

const InterestButtonStyle = isSelected =>
  StyleSheet.create({
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
      backgroundColor: isSelected ? '#FF9800' : '#fff',
    },
    buttonContent: {
      fontSize: 14,
    },
  });
