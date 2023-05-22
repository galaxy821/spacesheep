import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

/**
 * 빈 공간 만들기 위한 컴포넌트
 * @param {number} height 높이
 * @param {number} width 너비
 * @returns {JSX.Element} 빈 박스 컴포넌트
 */
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
