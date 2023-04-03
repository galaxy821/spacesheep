import styled from 'styled-components/native';
import { FONT_BOLD } from './DefaultStyle';

/**Home Container */
export const HomeFlatList = styled.FlatList`
  padding-bottom: ${({ bottomBarArea }) => bottomBarArea}px;
  background-color: #fff;
`;

/**Banner Section */
export const HomeBannerView = styled.View`
  width: 100%;
  height: 200px;
  margin: 7px 0px;
`;

/**Title Section */
export const TitleContainer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${FONT_BOLD};
`;

export const InterestButtonStyle = {
  TouchableOpacity: styled.TouchableOpacity`
    padding: 6px 12px;
    border-radius: 20px;
    border: 1px solid #000;
    margin: 0px 7px 7px 0px;
    justify-content: center;
  `,
  Text: styled.Text`
    font-size: 14px;
  `,
};

export const InterestSectionStyle = {
  View: styled.View`
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 15px 0px 15px;
    background-color: #fff;
  `,
  Text: styled.Text`
    font-size: 16px;
    font-weight: bold;
    font-family: ${FONT_BOLD};
  `,
  ContentView: styled.View`
    flex-direction: row;
    padding: 10px 0px;
    flex-wrap: wrap;
  `,
};
