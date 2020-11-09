import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Login, Sign, Timeline} from './pages';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      {
        <Text>selam</Text>
      }
    </NavigationContainer>
  );
}

export default Router;
