import { BottomBarRoute } from './routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import AuthRequired from './AuthRequired';
import ProfileScreen from '../screens/profile/ProfileScreen';
import PostMessageScreen from '../screens/postmessage/PostMessageScreen';
import BookmarkScreen from '../screens/bookmark/BookmarkScreen';
import MomentScreen from '../screens/moment/MomentSccreen';

const BottomTab = createBottomTabNavigator();

function BottomBarNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'skyblue',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: { height: 80 },
      }}
    >
      <BottomTab.Screen name={BottomBarRoute.HOME} component={HomeScreen} />
      <BottomTab.Screen name={BottomBarRoute.MOMENT}>
        {() => (
          <AuthRequired>
            <MomentScreen />
          </AuthRequired>
        )}
      </BottomTab.Screen>
      <BottomTab.Screen name={BottomBarRoute.BOOKMARK}>
        {() => (
          <AuthRequired>
            <BookmarkScreen />
          </AuthRequired>
        )}
      </BottomTab.Screen>

      <BottomTab.Screen name={BottomBarRoute.POST_MESSAGE}>
        {() => (
          <AuthRequired>
            <PostMessageScreen />
          </AuthRequired>
        )}
      </BottomTab.Screen>
      <BottomTab.Screen name={BottomBarRoute.PROFILE}>
        {() => (
          <AuthRequired>
            <ProfileScreen />
          </AuthRequired>
        )}
      </BottomTab.Screen>
    </BottomTab.Navigator>
  );
}

export default BottomBarNavigator;
