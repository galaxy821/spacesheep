import { View } from 'react-native';
import { HeightBox, HeightWidthBox, WidthBox } from '../styles/DefaultStyle';
import { PropTypes } from 'prop-types';

const SpaceBox = ({ height, width }) => {
  if (height != null && width != null) {
    return <HeightWidthBox style={{ height: height, width: width }} />;
  } else if (height != null) {
    return <HeightBox style={{ height: height }} />;
  } else if (width != null) {
    return <WidthBox style={{ width: width }} />;
  } else {
    return <View />;
  }
};

SpaceBox.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default SpaceBox;
