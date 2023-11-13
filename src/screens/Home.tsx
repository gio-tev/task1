import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput, Button} from 'react-native-paper';
import {ScreenProps} from '../navigators/StackNavigator';

const Home: React.FC<ScreenProps<'Home'>> = ({navigation}) => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = () => {
    navigation.navigate('ImagePreview', {
      width: Number(width),
      height: Number(height),
    });
  };

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
          keyboardType="numeric"
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
