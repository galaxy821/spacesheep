import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const ViewBox = ({ children, ...props }) => {
  return <HeightWidthViewBox {...props}>{children}</HeightWidthViewBox>;
};

export const HeightWidthViewBox = styled.View`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  margin: ${({ margin }) => margin}px;
  padding: ${({ padding }) => padding}px;
`;

ViewBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ViewBox;
