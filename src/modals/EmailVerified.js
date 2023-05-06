import { Text } from 'react-native';
import styled from 'styled-components/native';
import SpaceBox from '../components/common/SpaceBox';
import { AuthTextButton } from '../components/auth/AuthButton';
import { useEffect } from 'react';

const EmailVerfiedContent = ({ setCurrentContent }) => {
  useEffect(() => {
    // check email verified
    // if verified, move to next step
    // if not, show this page
  }, []);

  return (
    <AuthFormView>
      <SpaceBox height={30} />
      <TitleText>이메일 인증을 완료해주세요.</TitleText>
      <TextForSignUp size={20}>
        가입한 이메일 주소로 인증 메일이 발송되었습니다.
      </TextForSignUp>
      <TextForSignUp size={20}>
        메일함을 확인하여 인증 링크를 클릭해주세요. 인증이 완료되면 자동으로
        다음 단계로 이동합니다.
      </TextForSignUp>
      <TextForSignUp size={16}>
        인증 메일을 받지 못한 경우, 스팸 메일함을 확인하거나 아래 버튼을 눌러
        인증 메일을 다시 발송해주세요.
      </TextForSignUp>

      <AuthTextButton title="안증 메일 다시 발송하기" />
      <SpaceBox height={20} />
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

const TitleText = styled.Text`
  font-size: 27px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 40px;
`;

const TextForSignUp = styled.Text`
  font-size: ${props => props.size}px;
  /* font-weight: bold; */
  margin-bottom: 20px;
  line-height: ${props => props.size + 5}px;
`;

export default EmailVerfiedContent;
