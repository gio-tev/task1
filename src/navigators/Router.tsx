import StackNavigator from './StackNavigator';
import {MD3LightTheme as PaperTheme} from 'react-native-paper';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: PaperTheme.colors.background,
  },
};

const Router = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Router;
