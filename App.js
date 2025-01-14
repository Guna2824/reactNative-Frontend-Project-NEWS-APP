import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreens'
import NewsScreen from './screens/NewsScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Head Lines'>
        <Stack.Screen
          name='Head Lines'
          component={HomeScreen}
          
        />
        <Stack.Screen name='news' component={NewsScreen} />
      </Stack.Navigator>
      <StatusBar style='light' backgroundColor='orange' />
    </NavigationContainer>
  );
}
