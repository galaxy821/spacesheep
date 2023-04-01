import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import Svg, { Path } from 'react-native-svg';
import NoticeIcon from './NoticeIcon';

const TitleSection = ({ onNoticePress }) => (
  <TitleContainer
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 45,
    }}
  >
    <Text style={{ fontSize: 24, fontFamily: 'KoddiUDOnGothic-Bold' }}>
      spacesheep
    </Text>
    <TouchableOpacity onPress={onNoticePress}>
      <NoticeIcon />
    </TouchableOpacity>
  </TitleContainer>
);

export default TitleSection;

const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
