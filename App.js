import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from './src/AppButton';

const App = () => {
  const handlePress = () => console.log('Pressed');
  return (
    <AppButton
      title="Login"
      textStyle={{fontSize: 20}}
      buttonStyle={{backgroundColor: 'teal'}}
      onPress={handlePress}
    />
  );
};

export default App;

const styles = StyleSheet.create({});
