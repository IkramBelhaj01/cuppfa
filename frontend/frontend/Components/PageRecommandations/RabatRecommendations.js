import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const RabatRecommendations = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        
        <RecommendationItem
          name=" La Maison Bleue"
          address="2 Place de L'Istiqlal, Fès"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/fes/MaisonB.jpg')}
        />
        <RecommendationItem
          name=" Nuit de Fès "
          address="4 derb Hammam Guerniz , Fès"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/fes/RiadNuitFes.jpg')}
        />
        <RecommendationItem
          name=" Palais Faraj "
          address="Arsat El Hammoumi , Fès"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/fes/PalaisFaraj.jpg')}
        />
        <RecommendationItem
          name=" Palais Bab Sahra "
          address="1 Rue taryana , Fès"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/fes/babsahra.jpg')}
        />
        <RecommendationItem
          name=" Les jardins de sheherazade "
          address="1 Rue taryana , Fès"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/fes/palaisShehera.jpg')}
        />
        <RecommendationItem
          name=" Dar roumana "
          address="30 Derb El Amer , Fès"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/fes/Roumana.jpg')}
        />
        <RecommendationItem
          name=" Mouda palace "
          address=" 7 Derb Agoual , Fès"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/fes/mouda.jpg')}
        />
        <RecommendationItem
          name=" Palais Amani  "
          address=" 12 Derb El Miter , Fès"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/fes/Amani.jpg')}
        />
        <RecommendationItem
          name=" Riad Salam "
          address=" 18 Derb Bennis Douh , Fès"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/fes/riadsalam.jpg')}
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

export default RabatRecommendations;
