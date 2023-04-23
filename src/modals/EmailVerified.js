import { Text } from 'react-native';
import styled from 'styled-components/native';

const EmailVerfiedContent = () => {
  return (
    <AuthFormView>
      <Text>이메일 인증화면을 보냈습니다. 이메일을 확인해주세요</Text>
    </AuthFormView>
  );
};

const AuthFormView = styled.View`
  display: flex;
  position: relative;
  width: 250px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export default EmailVerfiedContent;
