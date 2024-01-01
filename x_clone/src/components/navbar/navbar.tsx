import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from 'tamagui';
import {Settings, User2} from '@tamagui/lucide-icons';

const Navbar = () => {
  return (
    <View style={styles.navContainer}>
      <Button icon={User2} style={styles.iconButton} size={60} />
      {/* <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg',
          width: 200,
          height: 300,
        }}
        style={{backgroundColor: '#fff'}}
      /> */}
      <Button icon={Settings} style={styles.iconButton} size={60} />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    backgroundColor: '#000',
    color: '#fff',
    width: 80,
    height: 80,
    padding: 0,
  },
});
