import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Card from '../components/card';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});
