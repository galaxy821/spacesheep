import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './AppScreenNavigator';
import { AppRoute } from './routes';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

const ModalStack = createNativeStackNavigator();

/**
 * Modal 관련 navigator
 */
function AppModalNavigator() {
  return (
    <ModalStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}
    >
      <ModalStack.Screen name="Main" component={AppNavigator} />
      <ModalStack.Screen
        name={AppRoute.LOGIN}
        component={LoginScreen}
        options={{ gestureEnabled: false }}
      />
      <ModalStack.Screen
        name={AppRoute.SIGN_UP}
        component={SignUpScreen}
        options={{ gestureEnabled: false }}
      />
    </ModalStack.Navigator>
  );
}

export default AppModalNavigator;
