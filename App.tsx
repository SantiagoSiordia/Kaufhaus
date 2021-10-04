import React, { FC } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainStackNavigator } from './src/features/navigation/MainStackNavigator';
import { KhThemeProvider } from './src/theme';

const App: FC = () => {
  return (
    <KhThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <MainStackNavigator />
      </SafeAreaView>
    </KhThemeProvider>
  );
};

export default App;