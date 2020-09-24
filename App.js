import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import VFastB2BNavigator from './src/navigation/VFastB2BNavigator';

const AppNavigator = createStackNavigator(
  {
    VFastB2BNavigator: VFastB2BNavigator,
  },
  {
    headerMode: null,
   
  },
);

export default createAppContainer(AppNavigator);