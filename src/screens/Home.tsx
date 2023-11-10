import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {ScreenProps} from '../navigators/StackNavigator';

const Home: FC<ScreenProps<'Home'>> = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
