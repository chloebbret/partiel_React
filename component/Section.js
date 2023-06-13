import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {  Text, StyleSheet, View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';


export default function Section() {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <View style={styles.divSection}>
        <Text style={styles.pseudo}>coco09</Text>
        <Text style={styles.nbjeux}>Nb de jeux : </Text>
      </View>
      <View style={styles.div2}>
        <Text style={styles.div2}>Filtré par</Text>

        <Text style={styles.texte}>Trié par prix</Text>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  divSection: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    position: "relative",
    bottom: 190,
    width: 350,
    height: 90,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  pseudo: {
    fontSize: 20,
    marginLeft: 30,
    marginRight: 10
  },
  nbjeux: {
    marginLeft: 100,
    fontSize: 20,
  },
  div2: {
    color: 'white',
    display: "flex",
    flexDirection: "row",
    position: "relative",
    bottom: 85,
    left: 5,
    fontSize: 15
  },

   texte: {
     color: 'white',
     display: "flex",
     flexDirection: "row",
     position: "relative",
     bottom: 85,
     left: 100,
     fontSize: 15
  },
  checkbox: {
    flexDirection: "row",
    alignSelf: "center",
    color: 'white'
  }
});
