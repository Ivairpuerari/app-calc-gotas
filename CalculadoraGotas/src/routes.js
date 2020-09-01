import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Calculator from './pages/Calculator/index';
import Result from './pages/Result/index';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Calculator" component={Calculator} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}
