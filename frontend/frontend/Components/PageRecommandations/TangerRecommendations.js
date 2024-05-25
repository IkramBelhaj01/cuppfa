import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const TangerRecommendations = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        
        <RecommendationItem
          name=" L'Olivier"
          address="Al Houara Resort, Tanger"
          image={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Tanger/LOLIVIER.jpeg')}
        />
        <RecommendationItem
          name=" El Morocco Club "
          address="Place du Tabor , Tanger"
          image={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Tanger/el-morocco-club.jpg')}
        />
        <RecommendationItem
          name=" Les Huitres "
          address="23 Av. Sidi Boukhari , Tanger"
          image={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Tanger/huites.jpg')}
        />
        <RecommendationItem
          name=" O Saveur "
          address=" Rte California, Tanger"
          image={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Tanger/oSaveur.jpg')}
        />
        <RecommendationItem
          name=" L'Ocean  "
          address="Plage Sidi Kacem , Tanger"
          image={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Tanger/ocean.jpg')}
        />
        <RecommendationItem
          name=" Dar Harruch "
          address="35 Rue Hadj Mohamed Torres , Tanger"
          image={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Tanger/Dar-Harruch.jpg')}
        />
        <RecommendationItem
          name=" Anzar "
          address=" Marina Bay , Tanger"
          image={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Tanger/anzar.jpg')}
        />
        <RecommendationItem
          name=" La Brasserie de Paris  "
          address=" Av. du Front de Mer , Tanger"
          image={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Tanger/brasserieParis.jpg')}
        />
        <RecommendationItem
          name=" Le Mirage "
          address=" Rte des Grottes , Tanger"
          image={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Tanger/mirage.jpg')}
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

export default TangerRecommendations;
