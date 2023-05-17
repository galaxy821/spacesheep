import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';

const NoticeScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: '공지사항',
      headerLeft: () => (
        <TouchableOpacity onPress={handleBackPress} style={{ marginLeft: 10 }}>
          <Text>Back</Text>
        </TouchableOpacity>
      ),
    });
    //eslint-disable-next-line
  }, [navigation]);

  return (
    <NoticeContentContainer>
      <Text>공지사항 콘텐츠 영역</Text>
    </NoticeContentContainer>
  );
  // return (
  //   <View style={noticeStyles.container}>
  //     <Text>NoticeScreen</Text>
  //   </View>
  // );
};

const NoticeContentContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const noticeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoticeScreen;
