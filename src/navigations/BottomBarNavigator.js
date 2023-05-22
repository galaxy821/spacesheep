import { BottomBarRoute } from './routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import AuthRequired from './AuthRequired';
import ProfileScreen from '../screens/profile/ProfileScreen';
import PostMessageScreen from '../screens/postmessage/PostMessageScreen';
import BookmarkScreen from '../screens/bookmark/BookmarkScreen';
import MomentScreen from '../screens/moment/MomentSccreen';
import { TAB_BAR_HEIGHT } from '../values/DefaultValue';
import { SvgIcon } from '../assets/icons/SvgIcon';

const BottomTab = createBottomTabNavigator();

/**
 * Bottom Bar 관련 navigator
 * @returns {JSX.Element} 하단 탭 네비게이터
 */
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
            focused ? <SvgIcon.HomeFilledIcon /> : <SvgIcon.HomeOutlinedIcon />,
        }}
      />
      <BottomTab.Screen
        name={BottomBarRoute.MOMENT}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SvgIcon.MomentFilledIcon />
            ) : (
              <SvgIcon.MomentOutlinedIcon />
            ),
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
            focused ? (
              <SvgIcon.BookmarkFilledIcon />
            ) : (
              <SvgIcon.BookmarkOutlinedIcon />
            ),
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
            focused ? (
              <SvgIcon.PostMessageFilledIcon />
            ) : (
              <SvgIcon.PostMessageOutlinedIcon />
            ),
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
            focused ? (
              <SvgIcon.ProfileFilledIcon />
            ) : (
              <SvgIcon.ProfileOutlinedIcon />
            ),
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
