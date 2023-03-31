import { Button, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const HomeScreen = () => {
  return (
    <Container>
      <Text>HomeScreen</Text>
      <Button title="button"></Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

export default HomeScreen;
