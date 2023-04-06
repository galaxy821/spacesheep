import styled from 'styled-components/native';
import { lightThemeColor } from '../../styles/Color';

const AuthButton = () => {
  // get value input value and execute login function
  const handleLoginPress = () => {
    console.log('Login button pressed');
  };
  return (
    <AuthButtonStyle.Button onPress={handleLoginPress}>
      <AuthButtonStyle.Text>로그인</AuthButtonStyle.Text>
    </AuthButtonStyle.Button>
  );
};

// styled-components for AuthButton
const AuthButtonStyle = {
  Button: styled.TouchableOpacity`
    width: 240px;
    height: 50px;
    background-color: ${lightThemeColor.primary};
    border-radius: 20px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
  `,
  Text: styled.Text`
    font-size: 16px;
  `,
};

export default AuthButton;
