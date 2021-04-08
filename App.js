import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Homescreen from './components/Homescreen';
import Aboutscreen from './components/Aboutscreen';


const AppNavigator = createStackNavigator({
  Homescreen: {screen: Homescreen,  navigationOptions: ({ navigation }) => ({
    title: 'Home',
  })},
  Aboutscreen: {screen: Aboutscreen, navigationOptions: ({ navigation }) => ({
    title: 'Detail',
  })},
  },
);

const App = createAppContainer(AppNavigator);

export default App;
