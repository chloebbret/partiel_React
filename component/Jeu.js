import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, TextInput } from 'react-native';

export default function Jeu() {
  const [text, setText] = useState('');
  const [titre, setTitre] = useState('');
  const [tarif, setTarif] = useState('');
  const [categorie, setCategorie] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.ajout}>
        <Text style={styles.textAjout}>Ajout d'un jeu vidéo</Text>
        <View style={styles.cont}>
          <View>
            <Text style={styles.label}>Titre :</Text>
            <TextInput
              style={styles.input}
              value={titre}
              onChangeText={setTitre}
              placeholder="Titre du jeu"
            />
          </View>
          <View>
            <Text style={styles.label}>Tarif :</Text>
            <TextInput
              style={styles.input}
              value={tarif}
              onChangeText={setTarif}
              placeholder="Tarif du jeu"
            />
          </View>
          <View>
            <Text style={styles.label}>Catégorie :</Text>
            <TextInput
              style={styles.input}
              value={categorie}
              onChangeText={setCategorie}
              placeholder="Catégorie du jeu"
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ajout: {
    position: "relative",
    top: 135
  },
  textAjout: {
    color: 'white',
    fontSize: 20,
    marginTop: 5,
    marginLeft: 70
  },
  cont: {
    backgroundColor: 'grey',
    width: 320,
    height: 200,
    position: "relative",
    top: 30,
    borderRadius: 15
  },
  input: {
    height: 27,
    width: 180,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  }
});
