import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MomentScreen from '../screens/MomentSccreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import PostMessageScreen from '../screens/PostMessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
// import AuthRequired from './AuthRequired';
import { BottomBarRoutes } from './routes';

const Tab = createNativeStackNavigator();

const BottomBarRoute = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: 'white' },
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      }}
      initialRouteName={BottomBarRoutes.HOME}
    >
      <Tab.Screen name={BottomBarRoutes.HOME} component={HomeScreen} />
      <Tab.Screen
        name={BottomBarRoutes.MOMENT}
        // component={() => <AuthRequired component={MomentScreen} />}
        component={MomentScreen}
      />
      <Tab.Screen
        name={BottomBarRoutes.BOOKMARK}
        // component={() => <AuthRequired component={BookmarkScreen} />}
        component={BookmarkScreen}
      />
      <Tab.Screen
        name={BottomBarRoutes.POST_MESSAGE}
        // component={() => <AuthRequired component={PostMessageScreen} />}
        component={PostMessageScreen}
      />
      <Tab.Screen
        name={BottomBarRoutes.PROFILE}
        // component={() => <AuthRequired component={ProfileScreen} />}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomBarRoute;
