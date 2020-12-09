import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import HomeTab from './components/HomeTab';
import SearchTab from './components/SearchTab';
import UpdatesTab from './components/UpdatesTab';
import UserTab from './components/UserTab';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <StatusBar backgroundColor = '#E60023' barStyle = 'light-content' />

      <Tab.Navigator tabBarOptions = {{
        labelStyle: {
          fontSize: 0
        },
        style: {
          height: 60,
          position: 'absolute',
          bottom: 30,
          width: '65%',
          borderRadius: 70,
          paddingLeft: 9,
          paddingRight: 9,
          marginLeft: 70,
          elevation: 4,
          borderTopWidth: 0
        }
      }} initialRouteName = {SearchTab}  >

        <Tab.Screen name = 'Home' component = {HomeTab} options={{
          tabBarIcon: ({}) => (
            <Icon name = 'home' size = {25} color={'#474747'} />
          )
        }} />

        <Tab.Screen name = 'Search' component = {SearchTab}  options={{
          tabBarIcon: ({}) => (
            <Icon name = 'search' size = {25} color={'#474747'}   />
          )
        }}  />

        <Tab.Screen name = 'Updates' component = {UpdatesTab}  options={{
          tabBarIcon: ({}) => (
            <Icon name = 'message' size = {25} color={'#474747'}  />
          )
        }}  />

        <Tab.Screen name = 'User' component = {UserTab}  options={{
          tabBarIcon: ({}) => (
            <Icon name = 'person' size = {25} color={'#474747'}   />
          )
        }}  />

      </Tab.Navigator>

    </NavigationContainer>
  )
};

const styles = StyleSheet.create({});