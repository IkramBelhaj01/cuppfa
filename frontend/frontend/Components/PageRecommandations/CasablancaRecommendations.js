import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const CasablancaRecommendations = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        
        <RecommendationItem
          name=" El Gousto"
          address="17 Rue Bab Al Irfane , Casablanca"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Casablanca/Gousto.jpg')}
        />
        <RecommendationItem
          name=" LaSqala "
          address="Bd des Almohades , Casablanca"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Casablanca/LaSqala.webp')}
        />
        <RecommendationItem
          name=" Atelier-Oriental "
          address="Rue Sidi Belyout, Casablanca"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Casablanca/atelier-oriental.jpg')}
        />
        <RecommendationItem
          name=" Brasserie La Tour "
          address="Rue Sidi Belyout, Casablanca "
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Casablanca/brasserieLaTour.jpg')}
        />
        <RecommendationItem
          name="La Bavaroise"
          address="Rue Nichakra Rahal, , Casablanca"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Casablanca/bavaroise.jpg')}
        />
        <RecommendationItem
          name=" Dar Dada "
          address="31 Rue El Arsa , Casablanca"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Casablanca/dada.jpg')}
        />
        <RecommendationItem
          name=" Boccaccio  "
          address="6 Rue Ahmed El Mokri , Casablanca"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Casablanca/bocacio.jpg')}
        />
        <RecommendationItem
          name=" Pergola  "
          address=" 19 Bd Moulay Rachid , Casablanca"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Casablanca/pergola.jpg')}
        />
        <RecommendationItem
          name=" Le Bistrot Chic "
          address=" Rue Taha Hussein , Casablanca"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Casablanca/bristrot.jpg')}
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

export default CasablancaRecommendations;
