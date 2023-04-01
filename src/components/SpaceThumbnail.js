import { Image, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

const SpaceThumbnail = ({ space }) => {
  //   const { id, name, description, image, color } = space;

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => {
        console.log('SpaceThumbnail pressed');
      }}
    >
      <SpaceThumbnailBox>
        <Image />
      </SpaceThumbnailBox>
      <View>
        <Text numberOfLines={1}>{'space name'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const SpaceThumbnailBox = styled.View`
  width: 110px;
  height: 110px;
  border-radius: 25px;
  background-color: #f1e09b;
`;

export default SpaceThumbnail;
