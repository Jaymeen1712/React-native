import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View style={styles.container}>
      <Text>Card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#caf0f8',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    margin: 10,
    flexWrap: 'wrap',
  },
});
