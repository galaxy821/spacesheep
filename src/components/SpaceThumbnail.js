import { Dimensions, Image } from 'react-native';
import { SpaceThumbnailStyle } from '../styles/DefaultStyle';
import { PropTypes } from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { AppRoute } from '../navigations/routes';

const screenWidth = (Dimensions.get('window').width - 60) / 3;

const SpaceThumbnail = ({ space }) => {
  const { id, name, image, description, color } = space;
  const navigation = useNavigation();

  return (
    <SpaceThumbnailStyle.Button
      activeOpacity={0.75}
      onPress={() => {
        navigation.navigate(AppRoute.SPACE, {
          id: id,
          name: name,
        });
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
