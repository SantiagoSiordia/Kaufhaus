import { FC } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MainStackNavigator } from "./src/features/navigation/MainStackNavigator";

const App: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainStackNavigator />
    </SafeAreaView>
  );
}

export default App;
