import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NoticeScreen from '../screens/NoticeScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import SpaceScreen from '../screens/SpaceScreen';
import BottomBarNavigator from './BottomBarNavigator';
import { AppRoute } from './routes';

const AppStack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={AppRoute.BOTTOM_BAR}
        component={BottomBarNavigator}
      />

      <AppStack.Screen
        name={AppRoute.SEARCH_RESULT}
        component={SearchResultScreen}
      />
      <AppStack.Screen name={AppRoute.NOTICE} component={NoticeScreen} />
      <AppStack.Screen name={AppRoute.SPACE} component={SpaceScreen} />
    </AppStack.Navigator>
  );
}

export default AppNavigator;
