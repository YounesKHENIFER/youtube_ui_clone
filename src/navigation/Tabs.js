import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import EmptyScreen from '../screens/EmptyScreen';
import HomeIcon from '../icons/HomeIcon';
import ShortsIcon from '../icons/ShortsIcon';
import AddIcon from '../icons/AddIcon';

import SubsIcon from '../icons/SubsIcon';
import LibIcon from '../icons/LibaryIcon';
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          color: 'black',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <HomeIcon size={23} />;
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <ShortsIcon size={23} />;
          },
        }}
        name="Shorts"
        component={EmptyScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <AddIcon size={35} />;
          },
          tabBarLabelStyle: {
            height: 0,
          },
        }}
        name="Add"
        component={EmptyScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <SubsIcon size={23} />;
          },
        }}
        name="Subs"
        component={EmptyScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <LibIcon size={23} />;
          },
        }}
        name="Lib"
        component={EmptyScreen}
      />
    </Tab.Navigator>
  );
}
