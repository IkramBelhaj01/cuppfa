import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const AgadirRecommendations = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        
        <RecommendationItem
          name=" Riad Asmaa"
          address="Douar Ibn Ayaden, Agadir"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Agadir/Asma.jpg')}
        />
        <RecommendationItem
          name=" Riad des Golfs "
          address="Ben Sergao, Agadir"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Agadir/golf.jpg')}
        />
        <RecommendationItem
          name=" Riad Villa Blanche "
          address="Secteur R n° 19, Agadir"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Agadir/riadvillaBlache.jpg')}
        />
        <RecommendationItem
          name=" Robinson Agadir "
          address="2 Chemin des Dunes Founty , Agadir "
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Agadir/ROBINSON.jpg')}
        />
        <RecommendationItem
          name=" Les Blancs "
          address=" Rte Marina , Agadir"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Agadir/Blancs.jpg')}
        />
        <RecommendationItem
          name=" Le 27 Paradis "
          address="Taghazout Village , Agadir"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Agadir/27paradis.jpg')}
        />
        <RecommendationItem
          name=" La Pergola "
          address=" Route Agadir-Inezgane , Agadir"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Agadir/pergola.jpg')}
        />
        <RecommendationItem
          name=" Pure Passion  "
          address=" Complexe Marina , Agadir"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Agadir/purePassion.jpg')}
        />
        <RecommendationItem
          name=" La Scala "
          address=" Rte de L'Oued Sous , Agadir"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Agadir/laScala.webp')}
        />
        
      </View>
    </ScrollView>
  );
}

const RecommendationItem = ({ name, address, image }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    color: 'gray',
    alignItems: 'center',
  },
});

export default AgadirRecommendations;
