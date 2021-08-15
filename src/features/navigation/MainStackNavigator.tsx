import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { CheckListScreen } from '../checklist/screens/CheckListScreen';
import { Header } from '../header/Header';
// import { MainStackParamList } from './MainStackParamList';
import { SCREENS } from './screens';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: props => <Header {...props}/>
        }}>
        <Stack.Screen name={SCREENS.CHECKLIST} component={CheckListScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}