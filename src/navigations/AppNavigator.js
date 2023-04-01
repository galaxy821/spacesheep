import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoticeScreen from '../screens/home/NoticeScreen';
import SearchResultScreen from '../screens/home/SearchResultScreen';
import SpaceScreen from '../screens/space/SpaceScreen';
import BottomBarNavigator from './BottomBarNavigator';
import { AppRoute } from './routes';
import CreateSpaceScreen from '../screens/profile/CreateSpaceScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import MomentContentScreen from '../screens/moment/MomentContentScreen';
import FindPasswordScreen from '../screens/auth/FindPasswordScreen';
import SetProfileScreen from '../screens/auth/SetProfileScreen';
import VerifiedEmailScreen from '../screens/auth/VerifiedEmailScreen';
import SpaceSettingScreen from '../screens/space/SpaceSettingScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import ProfileSettingScreen from '../screens/profile/ProfileSettingScreen';

const AppStack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen
        name={AppRoute.BOTTOM_BAR}
        component={BottomBarNavigator}
      />
      <AppStack.Screen
        name={AppRoute.CREATE_SPACE}
        component={CreateSpaceScreen}
      />
      <AppStack.Screen
        name={AppRoute.FIND_PASSWORD}
        component={FindPasswordScreen}
      />
      {/* <AppStack.Screen name={AppRoute.LOGIN} component={LoginScreen} /> */}
      <AppStack.Screen
        name={AppRoute.MOMENT_CONTENT}
        component={MomentContentScreen}
      />
      <AppStack.Screen name={AppRoute.NOTICE} component={NoticeScreen} />
      <AppStack.Screen
        name={AppRoute.PROFILE_SETTING}
        component={ProfileSettingScreen}
      />
      <AppStack.Screen
        name={AppRoute.SEARCH_RESULT}
        component={SearchResultScreen}
      />
      <AppStack.Screen
        name={AppRoute.SET_PROFILE}
        component={SetProfileScreen}
      />
      {/* <AppStack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen} /> */}
      <AppStack.Screen name={AppRoute.SPACE} component={SpaceScreen} />
      <AppStack.Screen
        name={AppRoute.SPACE_SETTING}
        component={SpaceSettingScreen}
      />
      <AppStack.Screen
        name={AppRoute.VERIFIED_EMAIL}
        component={VerifiedEmailScreen}
      />
      <AppStack.Screen name={AppRoute.WELCOME} component={WelcomeScreen} />
    </AppStack.Navigator>
  );
}

export default AppNavigator;
