import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
import {Box, HStack} from 'native-base';
import CameraIcon from '../icons/CameraIcon';
import CallsScreen from '../screens/CallsScreen';

const Tab = createMaterialTopTabNavigator();
import MessagesScreen from '../screens/MessagesScreen';
import StatusScreen from '../screens/StatusScreen';
export default function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={props => (
        <HStack space="5px" bg="#008069" alignItems="center" pl="5px">
          <CameraIcon color="#fff" size={25} />
          <Box flex="1">
            <MaterialTopTabBar {...props} />
          </Box>
        </HStack>
      )}
      screenOptions={{
        tabBarContentContainerStyle: {
          backgroundColor: '#008069',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '500',
          color: 'white',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#fff',
          height: 3,
        },
        tabBarIndicatorContainerStyle: {
          zIndex: 10000,
        },
      }}>
      <Tab.Screen name="Chats" component={MessagesScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  );
}
