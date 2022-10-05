import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      detachInactiveScreens={false}
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="HomeScreen" component={MainScreen} />
    </Stack.Navigator>
  );
}
