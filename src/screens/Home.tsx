import React from 'react';
import {View, StyleSheet, Text, GestureResponderEvent} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput, Button, useTheme} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';
import {ScreenProps} from '../navigators/StackNavigator';

const inputValidation = yup
  .string()
  .required('Width is required')
  .matches(/^[1-9]\d*$/, 'Width must be a positive number');

const validationSchema = yup.object().shape({
  width: inputValidation,
  height: inputValidation,
});

const Home: React.FC<ScreenProps<'Home'>> = ({navigation}) => {
  const {
    colors: {error},
  } = useTheme();

  const styles = getStyles(error);

  const handleSubmit = (values: {width: string; height: string}) => {
    navigation.navigate('ImagePreview', {
      width: Number(values.width),
      height: Number(values.height),
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{width: '', height: ''}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          dirty,
        }) => {
          return (
            <View style={styles.innerContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  mode="outlined"
                  label="Width"
                  placeholder="Enter Width"
                  onChangeText={handleChange('width')}
                  onBlur={handleBlur('width')}
                  value={values.width}
                  keyboardType="numeric"
                  error={touched.width && !!errors.width}
                />
                {errors.width && (
                  <Text style={styles.errorText}>{errors.width}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  mode="outlined"
                  label="Height"
                  placeholder="Enter Height"
                  onChangeText={handleChange('height')}
                  onBlur={handleBlur('height')}
                  value={values.height}
                  keyboardType="numeric"
                  error={touched.height && !!errors.height}
                />
                {errors.height && (
                  <Text style={styles.errorText}>{errors.height}</Text>
                )}
              </View>

              <Button
                style={styles.button}
                disabled={!dirty || !!Object.values(error).length}
                mode="contained"
                onPress={() => handleSubmit()}>
                Get Image
              </Button>
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default Home;

const getStyles = (color: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    innerContainer: {
      flex: 1,
      gap: 40,
      paddingTop: '30%',
      paddingHorizontal: 50,
    },
    inputContainer: {
      gap: 10,
    },
    errorText: {
      color,
      paddingLeft: 15,
    },
    button: {
      paddingVertical: 10,
    },
  });
};
