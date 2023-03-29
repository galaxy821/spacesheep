import { BottomBarRoute } from './routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MomentScreen from '../screens/MomentSccreen';
import AuthRequired from './AuthRequired';
import ProfileScreen from '../screens/ProfileScreen';
import PostMessageScreen from '../screens/PostMessageScreen';
import BookmarkScreen from '../screens/BookmarkScreen';

const BottomTab = createBottomTabNavigator();

function BottomBarNavigator() {
  return (
    <BottomTab.Navigator>
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
