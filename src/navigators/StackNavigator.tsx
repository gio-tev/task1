import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ImagePreview from '../screens/ImagePreview';

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

type RootStackParamList = {
  Home: undefined;
  ImagePreview: {width: number; height: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ImagePreview"
        component={ImagePreview}
        options={{headerTitle: ''}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
