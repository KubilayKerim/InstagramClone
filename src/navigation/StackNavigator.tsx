import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen from '../screens/Intro';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator =() => {
  return (
      <Stack.Navigator initialRouteName='Intro'
          screenOptions={{
              headerBackTitleVisible: false,
          }}>
          <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}

export default StackNavigator;