import { Text, View } from 'react-native';
import styled from 'styled-components';
import InterestButton from './InterestButton';

const InterestSection = () => {
  return (
    <InterestView>
      <InterestTitle>관심사를 골라보세요</InterestTitle>
      <InterestContentView>
        <InterestButton title="취미"></InterestButton>
        <InterestButton title="독서"></InterestButton>
        <InterestButton title="seventeen"></InterestButton>
        <InterestButton title="세븐틴"></InterestButton>
        <InterestButton title="네이버"></InterestButton>
        <InterestButton title="카카오"></InterestButton>
        <InterestButton title="프로그래밍"></InterestButton>
        <InterestButton title="코딩"></InterestButton>
        <InterestButton title="프론트엔드"></InterestButton>
        <InterestButton title="백엔드"></InterestButton>
        <InterestButton title="안드로이드"></InterestButton>
        <InterestButton title="IOS"></InterestButton>
      </InterestContentView>
    </InterestView>
  );
};

export default InterestSection;

const InterestView = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 15px 0px 15px;
  background-color: #fff;
`;

const InterestTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  font-family: 'KoddiUDOnGothic-Bold';
`;

const InterestContentView = styled.View`
  flex-direction: row;
  padding: 10px 0px;
  flex-wrap: wrap;
`;
