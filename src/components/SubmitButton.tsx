import React from 'react';
import {Dimensions} from 'react-native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const {width: screenWidth} = Dimensions.get('screen');

interface IPropsTypes {
  isDisable?: boolean;
  handleSubmitButton?: any;
  title: string;
}

const SubmitButton = ({isDisable, handleSubmitButton, title}: IPropsTypes) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={isDisable}
        style={[
          styles.buttonStyles,
          {
            opacity: isDisable ? 0.5 : 1,
          },
        ]}
        onPress={handleSubmitButton}>
        <Text style={styles.textContainer}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: screenWidth / 2,
    borderRadius: 10,
    backgroundColor: '#E56746',
    shadowColor: '#010101',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonStyles: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default SubmitButton;
