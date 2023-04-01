import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

const screenWidth = (Dimensions.get('window').width - 60) / 3;

const SpaceThumbnail = ({ space }) => {
  //   const { id, name, description, image, color } = space;

  return (
    <SpaceTouchable
      activeOpacity={0.75}
      onPress={() => {
        console.log('SpaceThumbnail pressed');
      }}
    >
      <SpaceThumbnailBox screenWidth={screenWidth}>
        <Image />
      </SpaceThumbnailBox>
      <SpaceTitleBox>
        <SpaceTitle numberOfLines={1}>{'space name'}</SpaceTitle>
      </SpaceTitleBox>
    </SpaceTouchable>
  );
};

const SpaceTouchable = styled.TouchableOpacity`
  margin-bottom: 15px;
  margin-left: 15px;
`;

const SpaceThumbnailBox = styled.View`
  width: ${props => props.screenWidth}px;
  height: ${props => props.screenWidth}px;
  border-radius: 25px;
  background-color: #f1e09b;
`;

const SpaceTitleBox = styled.View`
  padding-left: 10px;
  margin-top: 5px;
`;

const SpaceTitle = styled.Text`
  font-size: 14px;
  font-family: 'KoddiUDOnGothic-Regular';
`;

export default SpaceThumbnail;
