import {SafeAreaView} from 'react-native';
import StackNavigator from './src/navigators/StackNavigator';
import {PaperProvider} from 'react-native-paper';

const App = (): JSX.Element => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        <StackNavigator />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
