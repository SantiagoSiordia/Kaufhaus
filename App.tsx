import 'intl';
import 'intl/locale-data/jsonp/en';
import { NativeBaseProvider } from 'native-base';
import React, { FC } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainStackNavigator } from './src/features/navigation/MainStackNavigator';
import { KhThemeProvider } from './src/theme';

const App: FC = () => {
  return (
    <NativeBaseProvider>
      <KhThemeProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <MainStackNavigator />
        </SafeAreaView>
      </KhThemeProvider>
    </NativeBaseProvider>
  );
};

export default App;