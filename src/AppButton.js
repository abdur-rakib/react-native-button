import React from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';

const AppButton = (props) => {
  return (
    <View style={[styles.container, {...props.buttonStyle}]}>
      <TouchableNativeFeedback onPress={props.onPress}>
        <Text
          style={[
            styles.title,
            {...props.textStyle},
            {color: props.color ? props.color : 'black'},
          ]}>
          {props.title}
        </Text>
      </TouchableNativeFeedback>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 120,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
  },
});
