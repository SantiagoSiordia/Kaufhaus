import 'intl';
import 'intl/locale-data/jsonp/en';
import { NativeBaseProvider } from 'native-base';
import React, { FC } from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { Provider } from 'react-redux';
import { MainStackNavigator } from './src/features/navigation/MainStackNavigator';
import { store } from "./src/features/redux";
import { KhThemeProvider } from './src/theme';
LogBox.ignoreLogs(['Constants', 'Setting']); // Ignore log notification by message

export const queryClient = new QueryClient()

const App: FC = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <KhThemeProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <QueryClientProvider client={queryClient}>
              <MainStackNavigator />
            </QueryClientProvider>
          </SafeAreaView>
        </KhThemeProvider>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;