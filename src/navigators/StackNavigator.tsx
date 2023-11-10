import {NavigationContainer} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

export type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
};

type RootStackParamList = {
  Home: undefined;
  Detail: {itemId: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
