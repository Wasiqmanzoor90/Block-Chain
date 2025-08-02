import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Homescreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Hi I'm from React Native</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default Homescreen;
