import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const MarrakechRecommendations = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        
        
        <RecommendationItem
          name=" Poka "
          address="Rue Khalid Ben El Oualid، Marrakech"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Marrakech/Poka.jpeg')}
        />
        <RecommendationItem
          name=" LAO "
          address="Rue Oued El Makhazine , Marrakech"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Marrakech/LaOjpg.jpg')}
        />
        <RecommendationItem
          name=" Casa Lalla "
          address="16 Derb Jamaa , Marrakech"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Marrakech/casa-lalla.jpg')}
        />
        <RecommendationItem
          name=" La Terrasse de La Brillante "
          address="6 Rue de la Bahia , Marrakech"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Marrakech/Brillante.jpg')}
        />
        <RecommendationItem
          name=" L'Ô A LA BOUCHE "
          address="4 Rue Badr , Marrakech"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Marrakech/OLAlaBouche.jpg')}
        />
        <RecommendationItem
          name=" La Table Du Riad "
          address="72 Arset Aouzal Rd , Marrakech"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Marrakech/TableRiad.jpg')}
        />
        <RecommendationItem
          name=" NARWAMA   "
          address=" Rue Koutoubia , Marrakech"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Marrakech/Narwama.jpg')}
        />
        <RecommendationItem
          name=" La Palette  "
          address=" 24 Rue Moulay Ali , Marrakech"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Marrakech/la-palette-restaurant.jpg')}
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

export default MarrakechRecommendations ;
