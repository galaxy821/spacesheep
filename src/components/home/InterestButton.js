import { PropTypes } from 'prop-types';
import { InterestButtonStyle } from '../../styles/HomeStyle';

const InterestButton = ({ title }) => {
  return (
    <InterestButtonStyle.TouchableOpacity>
      <InterestButtonStyle.Text>{title}</InterestButtonStyle.Text>
    </InterestButtonStyle.TouchableOpacity>
  );
};

InterestButton.propTypes = {
  title: PropTypes.string,
};

export default InterestButton;
