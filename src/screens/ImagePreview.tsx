import {Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenProps} from '../navigators/StackNavigator';

const ImagePreview: React.FC<ScreenProps<'ImagePreview'>> = ({route}) => {
  const {width, height} = route.params;

  const imageStyles = {width, height};

  return (
    <SafeAreaView>
      <Image
        style={imageStyles}
        source={{uri: `https://picsum.photos/${width}/${height}`}}
      />
    </SafeAreaView>
  );
};

export default ImagePreview;
