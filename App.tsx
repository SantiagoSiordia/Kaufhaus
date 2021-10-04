import 'intl';
import 'intl/locale-data/jsonp/en';
import { NativeBaseProvider } from 'native-base';
import React, { FC } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { MainStackNavigator } from './src/features/navigation/MainStackNavigator';
import { store } from "./src/features/redux";
import { KhThemeProvider } from './src/theme';

const App: FC = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <KhThemeProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <MainStackNavigator />
          </SafeAreaView>
        </KhThemeProvider>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;