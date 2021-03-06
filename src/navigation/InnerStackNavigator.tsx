import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import DetailsScreen from '../screens/Details';
import HomeScreen from '../screens/Home';
const InnerStack = createNativeStackNavigator();

const InnerStackNavigator =() => {
  return (
      <InnerStack.Navigator>
          <InnerStack.Screen name="Home" component={HomeScreen}/>
          <InnerStack.Screen name="Details" component={DetailsScreen}/>
      </InnerStack.Navigator>
  );
}

export default InnerStackNavigator;