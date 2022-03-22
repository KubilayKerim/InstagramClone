import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AlertsScreen from '../screens/Alerts';
import PeopleScreen from '../screens/People';
import InnerStackNavigator from './InnerStackNavigator';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=> {
  // const []
  return (
    <Tab.Navigator
     screenOptions={({ route }) => {
      const toExclude: typeof route.name[] = ['Details']
      return {
        tabBarActiveBackgroundColor: '#048345',
        title: '',
        tabBarIconStyle: {
          activeTintColor: 'red',
          inactiveTintColor: 'blue',
        },
          tabBarButton: toExclude.includes(route.name)
              ? () => {
                      return null
                }
              : undefined,
      }
  }}
  >
      <Tab.Screen name="InnerStackNavigator" component={InnerStackNavigator}
        options={{
          headerShown: false, unmountOnBlur: true,
          tabBarIcon: (props) => (
            <Image source={require('../assets/images/home.png')}
              tintColor={props.focused ? 'white' : '#348aa7'}
            />
          ),
        }} />
      <Tab.Screen name="Alerts" component={AlertsScreen}
        options={{
          headerShown: false,
          tabBarIcon: (props) => (
            <Image source={require('../assets/images/bell.png')} 
            tintColor={props.focused ? 'white' : '#348aa7'}
            />
          ),
        }} />
      <Tab.Screen name="People" component={PeopleScreen} 
        options={{
          headerShown: false, 
          tabBarIcon: (props) => (
            <Image source={require('../assets/images/users.png')}
            tintColor={props.focused ? 'white' : '#348aa7'}
            />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;