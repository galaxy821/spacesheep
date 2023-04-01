import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';
import { AppRoute } from './routes';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

const ModalStack = createNativeStackNavigator();

function ModalNavigator() {
  return (
    <ModalStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}
    >
      <ModalStack.Screen name="Main" component={AppNavigator} />
      <ModalStack.Screen name={AppRoute.LOGIN} component={LoginScreen} />
      <ModalStack.Screen name={AppRoute.SIGN_UP} component={SignUpScreen} />
    </ModalStack.Navigator>
  );
}

export default ModalNavigator;
