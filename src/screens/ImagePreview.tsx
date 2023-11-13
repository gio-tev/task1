import {Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenProps} from '../navigators/StackNavigator';

const ImagePreview: React.FC<ScreenProps<'ImagePreview'>> = ({route}) => {
  const {width, height} = route.params;

  const imageStyles = {width, height};

  return (
    <SafeAreaView style={styles.container}>
      <Image
        // style={{...route.params}}
        // style={{width, height}}
        style={imageStyles}
        source={{uri: `https://picsum.photos/${width}/${height}`}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ImagePreview;
