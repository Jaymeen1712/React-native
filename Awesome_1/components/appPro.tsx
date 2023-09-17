import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const logoImg = require('../assets/bird-colorful-logo-gradient-vector_343694-1365.webp');

export default function AppPro() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          accusantium, molestias aspernatur ipsum et ullam facere, illo possimus
          culpa aliquid provident accusamus! Ad itaque eaque praesentium
          architecto debitis repellendus accusamus? Cupiditate unde qui
          consequatur tempora commodi magni corrupti aspernatur iusto corporis
          harum! Recusandae magni laudantium facere, enim quod omnis eaque
          accusamus ut fugiat repellat necessitatibus, molestias error
          veritatis? At, perferendis. Voluptates accusantium hic aspernatur! Ex,
          libero. Corrupti ducimus praesentium minima perspiciatis illo
          laboriosam dolorem aspernatur temporibus facilis nisi. Optio,
          molestias. Suscipit in unde soluta fuga architecto
        </Text>
        <Image source={logoImg} style={styles.image} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 60,
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
  image: {
    height: 200,
    width: 200,
  },
});
