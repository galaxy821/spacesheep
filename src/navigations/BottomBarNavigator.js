import { BottomBarRoute, AuthRoutes } from './routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import AuthRequired from './AuthRequired';
import ProfileScreen from '../screens/profile/ProfileScreen';
import PostMessageScreen from '../screens/postmessage/PostMessageScreen';
import BookmarkScreen from '../screens/bookmark/BookmarkScreen';
import MomentScreen from '../screens/moment/MomentSccreen';
import HomeFilledIcon from '../components/icons/HomeFilledIcon';
import HomeOutlinedIcon from '../components/icons/HomeOutlinedIcon';
import MomentFilledIcon from '../components/icons/MomentFilledIcon';
import MomentOutlinedIcon from '../components/icons/MomentOutlinedIcon';
import BookmarkFilledIcon from '../components/icons/BookmarkFilledIcon';
import BookmarkOutlinedIcon from '../components/icons/BookmarkOutlinedIcon';
import PostMessageFilledIcon from '../components/icons/PostMessageFilledIcon';
import PostMessageOutlinedIcon from '../components/icons/PostMessageOutlinedIcon';
import ProfileFilledIcon from '../components/icons/ProfileFilledIcon';
import ProfileOutlinedIcon from '../components/icons/ProfileOutlinedIcon';
import { TAB_BAR_HEIGHT } from '../values/DefaultValue';

const BottomTab = createBottomTabNavigator();

function BottomBarNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: 'skyblue',
        // tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: { height: TAB_BAR_HEIGHT },
      }}
    >
      <BottomTab.Screen
        name={BottomBarRoute.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <HomeFilledIcon /> : <HomeOutlinedIcon />,
        }}
      />
      <BottomTab.Screen
        name={BottomBarRoute.MOMENT}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <MomentFilledIcon /> : <MomentOutlinedIcon />,
        }}
      >
        {() => (
          <AuthRequired>
            <MomentScreen />
          </AuthRequired>
        )}
      </BottomTab.Screen>
      <BottomTab.Screen
        name={BottomBarRoute.BOOKMARK}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <BookmarkFilledIcon /> : <BookmarkOutlinedIcon />,
        }}
      >
        {() => (
          <AuthRequired>
            <BookmarkScreen />
          </AuthRequired>
        )}
      </BottomTab.Screen>

      <BottomTab.Screen
        name={BottomBarRoute.POST_MESSAGE}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <PostMessageFilledIcon /> : <PostMessageOutlinedIcon />,
        }}
      >
        {() => (
          <AuthRequired>
            <PostMessageScreen />
          </AuthRequired>
        )}
      </BottomTab.Screen>
      <BottomTab.Screen
        name={BottomBarRoute.PROFILE}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileFilledIcon /> : <ProfileOutlinedIcon />,
        }}
      >
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
