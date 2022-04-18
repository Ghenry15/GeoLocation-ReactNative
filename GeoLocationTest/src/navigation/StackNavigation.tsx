import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../pages/HomeScreen';
import { MapScreen } from '../pages/MapScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{
      headerShown:false,
      cardStyle:{
        backgroundColor:'white'
      }
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})