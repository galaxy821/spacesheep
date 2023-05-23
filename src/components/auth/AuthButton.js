import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import { lightThemeColor } from '../../styles/Color';
import SpaceBox from '../common/SpaceBox';

/**
 * 인증 버튼
 * @param {object} props 컴포넌트 props
 * @param {string} title 버튼 텍스트
 * @param {number} width 버튼 너비
 * @param {number} height 버튼 높이
 * @param {string} color 버튼 배경색
 * @param {function} onPress 버튼 클릭 시 실행 함수
 * @returns {JSX.Element} 인증 버튼 컴포넌트
 */
export const AuthButton = ({ title, width, height, color, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={AuthButtonStyle(width, height, color).button}
    >
      <Text style={AuthButtonTextStyle.text}>{title}</Text>
    </TouchableOpacity>
  );
};

AuthButton.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

/**
 * 로그인 버튼
 * @param {object} props 컴포넌트 props
 * @param {string} title 버튼 텍스트
 * @param {string} backgroundColor 버튼 배경색
 * @param {string} textColor 버튼 텍스트 색
 * @param {function} onPress 버튼 클릭 시 실행 함수
 * @param {node} children 버튼 내부에 들어갈 로고 컴포넌트
 * @returns {JSX.Element} 로그인 버튼 컴포넌트
 */
export const LoginButton = ({
  title,
  backgroundColor,
  textColor,
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={LoginButtonStyle(240, 50, backgroundColor).button}
    >
      {children != undefined && (
        <>
          {children}
          <SpaceBox width={20} />
        </>
      )}
      <Text style={LoginButtonTextStyle(textColor).text}>{title}</Text>
    </TouchableOpacity>
  );
};

LoginButton.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.node,
};

/**
 * 텍스트 버튼 컴포넌트
 * @param {object} props 컴포넌트 props
 * @param {string} title 버튼 텍스트
 * @param {function} onPress 버튼 클릭 시 실행 함수
 * @returns {JSX.Element} 텍스트 버튼 컴포넌트
 */
export const AuthTextButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={{ top: 30, left: 30, bottom: 30, right: 30 }}
    >
      <Text style={{ textDecorationLine: 'underline', fontSize: 14 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

AuthTextButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

const AuthButtonStyle = (width, height, backgroundColor) =>
  StyleSheet.create({
    button: {
      width: width,
      height: height,
      backgroundColor: backgroundColor || lightThemeColor.primary,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

const AuthButtonTextStyle = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

const LoginButtonStyle = (width, height, backgroundColor) =>
  StyleSheet.create({
    button: {
      width: width,
      height: height,
      backgroundColor: backgroundColor || lightThemeColor.primary,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      flexDirection: 'row',
    },
  });

const LoginButtonTextStyle = textColor =>
  StyleSheet.create({
    text: {
      fontSize: 14,
      color: textColor,
    },
  });
