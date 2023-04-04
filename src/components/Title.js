import { TitleStyle } from '../styles/DefaultStyle';
import { TITLE_TEXT } from '../values/DefaultValue';
import { PropTypes } from 'prop-types';

const Title = ({ size }) => {
  return <TitleStyle size={size}>{TITLE_TEXT}</TitleStyle>;
};

Title.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Title;
