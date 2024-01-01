import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {TamaguiProvider} from 'tamagui';

import Dashboard from './src/pages/dashboard/dashboard';
import appConfig from './tamagui.config';

const App = () => {
  return (
    <TamaguiProvider config={appConfig}>
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
          <Dashboard />
        </ScrollView>
      </SafeAreaView>
    </TamaguiProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    flex: 1,
  },
});
