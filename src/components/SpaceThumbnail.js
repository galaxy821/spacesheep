import { Dimensions, Image } from 'react-native';
import { SpaceThumbnailStyle } from '../styles/DefaultStyle';
import { PropTypes } from 'prop-types';

const screenWidth = (Dimensions.get('window').width - 60) / 3;

const SpaceThumbnail = ({ space }) => {
  const { id, name, image, description, color } = space;

  return (
    <SpaceThumbnailStyle.Button
      activeOpacity={0.75}
      onPress={() => {
        console.log('SpaceThumbnail pressed');
      }}
    >
      <SpaceThumbnailStyle.Box screenWidth={screenWidth}>
        <Image />
      </SpaceThumbnailStyle.Box>
      <SpaceThumbnailStyle.TitleBox>
        <SpaceThumbnailStyle.Title numberOfLines={1}>
          {name}
        </SpaceThumbnailStyle.Title>
      </SpaceThumbnailStyle.TitleBox>
    </SpaceThumbnailStyle.Button>
  );
};

SpaceThumbnail.propTypes = {
  space: PropTypes.object,
};

export default SpaceThumbnail;
