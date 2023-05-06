import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

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

export const HeightWidthBox = styled.View`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

export const HeightBox = styled.View`
  height: ${({ height }) => height}px;
`;

export const WidthBox = styled.View`
  width: ${({ width }) => width}px;
`;

export default SpaceBox;
