import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { CheckListScreen } from '../checklist/screens/CheckListScreen';
import { SCREENS } from './Screens';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.CHECKLIST} component={CheckListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}