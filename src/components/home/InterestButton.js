import { Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const InterestButtonShape = styled.TouchableOpacity`
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid #000;
  margin: 0px 7px 7px 0px;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 14px;
`;

const InterestButton = ({ title }) => {
  return (
    <InterestButtonShape>
      <ButtonText>{title}</ButtonText>
    </InterestButtonShape>
  );
};

export default InterestButton;
