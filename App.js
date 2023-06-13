import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Jeu from './component/Jeu.js';
import Section from './component/Section.js';

export default function App() {
  const [jeux, setJeux] = useState([]);

  useEffect(() => {
    const jsonData = [
      {
        "name": "Medal of Honor",
        "price": "10€",
        "categorie": "FPS",
        "id": 23124
      },
      {
        "name": "Street Fighter 2",
        "price": "20€",
        "categorie": "Combat",
        "id": 12349
      },
      {
        "name": "Call of Duty",
        "price": "30€",
        "categorie": "FPS",
        "id": 549762
      },
      {
        "name": "NBA2K5",
        "price": "5€",
        "categorie": "Sport",
        "id": 549763
      },
      {
        "name": "God Of War 2018",
        "price": "25€",
        "categorie": "Action-Aventure",
        "id": 549764
      },
      {
        "name": "The Legend of Zelda : The Wind Walker",
        "price": "35€",
        "categorie": "Action-Aventure",
        "id": 549765
      },
      {
        "name": "Horizon : Forbidden West",
        "price": "40€",
        "categorie": "Action-Aventure",
        "id": 549766
      },
      {
        "name": "Forza Horizon 5",
        "price": "45€",
        "categorie": "Voiture",
        "id": 549767
      },
      {
        "name": "The Last Of Us",
        "price": "55€",
        "categorie": "Survival horror",
        "id": 549768
      },
      {
        "name": "Red Dead Redemption II",
        "price": "18€",
        "categorie": "Action-Aventure",
        "id": 549769
      }
    ];
    setJeux(jsonData);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.nom}>{item.name}</Text>
      <Text style={styles.prix}>{item.price}</Text>
      <Text style={styles.categorie}>{item.categorie}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Section total={jeux.length} />
      <View style={styles.vue}>
        <FlatList
          data={jeux}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.scrollView}
        />
      </View>
      <Jeu jeux={jeux} setJeux={setJeux} />
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
  scrollView: {
    paddingBottom: 20,
  },

  item: {
    marginBottom: 20,
    // backgroundColor: 'lightgrey',
    padding: 10,
    width: 300,
    alignItems: "center",
    borderRadius: 15
  },

  nom: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  prix: {
    fontSize: 14,
  },
  categorie: {
    fontSize: 14,
  },
  vue: {
    backgroundColor: 'white',
    width: 300,
    height: 250,
    marginTop: 130,
    borderRadius: 15
  }
});
