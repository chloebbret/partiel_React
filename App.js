import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ListeJeux from './component/ListeJeux.js';
import Jeu from './component/Jeu.js';
import Section from './component/Section.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Section/>
      <Jeu></Jeu>
      {/*<ListeJeux></ListeJeux>*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
