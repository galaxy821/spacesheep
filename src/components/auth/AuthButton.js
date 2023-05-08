import styled from 'styled-components/native';
import { lightThemeColor } from '../../styles/Color';
import { PropTypes } from 'prop-types';
import SpaceBox from '../common/SpaceBox';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

export const AuthButton = ({ title, width, height, color, onPress }) => {
  return (
    <AuthStyle.Button
      onPress={onPress}
      width={width}
      height={height}
      color={color}
    >
      <AuthStyle.Text>{title}</AuthStyle.Text>
    </AuthStyle.Button>
  );
};

AuthButton.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

export const LoginButton = ({
  title,
  backgroundColor,
  textColor,
  onPress,
  children,
}) => {
  return (
    <AuthStyle.LoginButton
      onPress={onPress}
      width={220}
      height={50}
      backgroundColor={backgroundColor}
    >
      {children != undefined && (
        <>
          {children}
          <SpaceBox width={20} />
        </>
      )}
      <AuthStyle.LoginText textColor={textColor}>{title}</AuthStyle.LoginText>
    </AuthStyle.LoginButton>
  );
};

LoginButton.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.node,
};

export const AuthTextButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={{ top: 30, left: 30, bottom: 30, right: 30 }}
    >
      <Text style={{ textDecorationLine: 'underline' }}>{title}</Text>
    </TouchableOpacity>
  );
};

AuthTextButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

const AuthStyle = {
  Button: styled.TouchableOpacity`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    background-color: ${({ color }) => color || lightThemeColor.primary};
    border-radius: 10px;
    /* box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2); */
    justify-content: center;
    align-items: center;
  `,
  Text: styled.Text`
    font-size: 16px;
  `,
  LoginButton: styled.TouchableOpacity`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    background-color: ${({ backgroundColor }) =>
      backgroundColor || lightThemeColor.primary};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    flex-direction: row;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    elevation: 5;
  `,
  LoginText: styled.Text`
    font-size: 14px;
    color: ${({ textColor }) => textColor || 'white'};
  `,
};
