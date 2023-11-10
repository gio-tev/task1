import React from 'react';
import {SafeAreaView} from 'react-native';
import StackNavigator from './src/navigators/StackNavigator';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <StackNavigator />
    </SafeAreaView>
  );
};

export default App;
