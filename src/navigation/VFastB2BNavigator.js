import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Text,
  StatusBar,
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Auth/Login';
import Colors from '../containers/Colors';
import Sigup from '../screens/Auth/Signup';
import Opening from '../screens/Auth/Opening';
import Home from '../screens/VFast/Home';
import Otp from '../screens/Auth/Otp';
import Forgot from '../screens/Auth/Forgot_Password';
import ForgotOtp from '../screens/Auth/ForgotOtp';
import Splash from '../screens/Splash';
import CustomDrawer from './CustomDrawer';
//Define a global color for toolbar
global.backgroundColor = '#176abf';
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.green_color : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.green_color,
};

const MyDrawerNavigator = createDrawerNavigator({
  Home: Home
 
},
  {
    headerMode: null,
    defaultNavigationOptions: defaultNavOptions,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);


const AuthNavigator = createStackNavigator(
  {
    Splash:Splash,
    Login: Login,
    
    ForgotOtp:ForgotOtp,
    Forgot:Forgot,
    Otp:Otp,
    Opening:Opening,
   
    Sigup:Sigup,
  },
  {
    headerMode: null,
    defaultNavigationOptions: defaultNavOptions,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const MainNavigator = createSwitchNavigator({
  CustomDrawer:CustomDrawer,
  MyDrawerNavigator:MyDrawerNavigator,
  AuthNavigator: AuthNavigator,
});

export default createAppContainer(MainNavigator);
