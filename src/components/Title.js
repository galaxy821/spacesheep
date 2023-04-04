import { TitleStyle } from '../styles/DefaultStyle';
import { TITLE_TEXT } from '../values/DefaultValue';

const Title = ({ size }) => {
  return <TitleStyle size={size}>{TITLE_TEXT}</TitleStyle>;
};

export default Title;
