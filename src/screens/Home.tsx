import {FC, useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {ScreenProps} from '../navigators/StackNavigator';
import {TextInput, Button} from 'react-native-paper';

const Home: FC<ScreenProps<'Home'>> = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          mode="outlined"
          label="Width"
          placeholder="Enter Width"
          onChangeText={setWidth}
          keyboardType="numeric"
        />

        <TextInput
          mode="outlined"
          label="Height"
          placeholder="Enter Height"
          onChangeText={setHeight}
        />

        <Button
          style={styles.button}
          disabled={!width || !height}
          mode="contained"
          onPress={handleSubmit}>
          Get Image
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    gap: 40,
    paddingTop: '30%',
    paddingHorizontal: 50,
  },
  button: {
    paddingVertical: 10,
  },
});
