import PropTypes from 'prop-types';
import styled from 'styled-components/native';

/**
 * margin, padding 값을 설정할 수 있는 뷰박스 컴포넌트
 * @param {JSX.Element} children 자식 컴포넌트
 * @param {number} height 높이
 * @param {number} width 너비
 * @param {number} margin 마진
 * @param {number} padding 패딩
 * @returns {JSX.Element} 뷰박스 컴포넌트
 */
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
