import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SpaceBox from '../../components/common/SpaceBox';
import { removeToken } from '../../modules/Token';
import { useNavigation } from '@react-navigation/native';
import { BottomBarRoute } from '../../navigations/routes';

function ProfileScreen() {
  const navigation = useNavigation();
  const logout = async () => {
    removeToken();
    navigation.reset({
      index: 0,
      routes: [{ name: BottomBarRoute.HOME }],
    });
  };

  return (
    <View style={profileStyles.container}>
      <Text>ProfileScreen</Text>
      <SpaceBox height={50} />
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
