import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { ShoppingListScreen } from '../shopping-list/screens/ShoppingListScreen';
import { Header } from '../header/Header';
import { SCREENS } from './screens';
// import { MainStackParamList } from "~/src/features/navigation/navigation";

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: props => <Header {...props}/>
        }}>
        <Stack.Screen name={SCREENS.CHECKLIST} component={ShoppingListScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
