import {PaperProvider} from 'react-native-paper';
import Router from './src/navigators/Router';

const App = (): JSX.Element => {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  );
};

export default App;
