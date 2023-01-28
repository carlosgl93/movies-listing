import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Movie} from '../interfaces/movieInterface';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

export type RootStackParams = {
  HomeScreen: undefined; // undefined because it doesnt need any argument!
  DetailScreen: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
