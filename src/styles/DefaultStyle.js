import styled from 'styled-components/native';

export const FONT_BOLD = 'KoddiUDOnGothic-Bold';
export const FONT_REGULAR = 'KoddiUDOnGothic-Regular';
export const FONT_EXTRA_BOLD = 'TAB_BAR_HEIGHT';

export const KoddiUDOnGothic = {
  'KoddiUDOnGothic-Bold': require('../../assets/fonts/KoddiUDOnGothic-Bold.otf'),
  'KoddiUDOnGothic-ExtraBold': require('../../assets/fonts/KoddiUDOnGothic-ExtraBold.otf'),
  'KoddiUDOnGothic-Regular': require('../../assets/fonts/KoddiUDOnGothic-Regular.otf'),
};

export const StatusBox = styled.View`
  background-color: #fff;
  height: ${({ safeArea }) => safeArea}px;
`;

export const SearchBarStyle = {
  View: styled.View`
    flex-direction: row;
    align-item: center;
    padding: 10px;
  `,
  TextInput: styled.TextInput`
    flex: 1;
    border-width: 0px;
    padding: 0px 50px 0px 20px;
    height: 45px;
    border-radius: 25px;
    background-color: #f8f8f8;
  `,
  Button: styled.TouchableOpacity`
    position: absolute;
    right: 30px;
  `,
};

export const SpaceThumbnailStyle = {
  Button: styled.TouchableOpacity`
    margin-bottom: 15px;
    margin-left: 15px;
  `,
  Box: styled.View`
    width: ${props => props.screenWidth}px;
    height: ${props => props.screenWidth}px;
    border-radius: 25px;
    background-color: #f1e09b;
  `,
  TitleBox: styled.View`
    padding-left: 10px;
    margin-top: 5px;
  `,
  Title: styled.Text`
    font-size: 14px;
    font-family: ${FONT_REGULAR};
  `,
};
