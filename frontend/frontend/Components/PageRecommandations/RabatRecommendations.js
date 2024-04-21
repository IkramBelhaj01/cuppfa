import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const RabatRecommendations = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        
        <RecommendationItem
          name=" Golden Fish"
          address="Avenue Imam Malik, Rabat"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Rabat/goldenFish.jpg')}
        />
        <RecommendationItem
          name="Le  Grill Robuchon "
          address="Center Agdal , Rabat"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Rabat/GrillRobuchon.jpg')}
        />
        <RecommendationItem
          name=" L'Epicurien "
          address="26 Av. Chellah , Rabat"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Rabat/epicurien.jpg')}
        />
        <RecommendationItem
          name=" Al Warda "
          address="Av. Doustour, Rabat"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Rabat/al-warda.jpg')}
        />
        <RecommendationItem
          name=" Cosmopolitan "
          address="Av. Ibn Toumart , Rabat"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Rabat/cosmopolitan.jpg')}
        />
        <RecommendationItem
          name=" Dinarjat "
          address="6 Rue Belgnaoui , Rabat"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Rabat/dinarjat.jpg')}
        />
        <RecommendationItem
          name=" Villa Mandarine  "
          address="19 Rue Oulad Bou'sbaa , Rabat"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Rabat/mandarine.jpg')}
        />
        <RecommendationItem
          name=" Le Petit Beur  "
          address=" Rue damas , Rabat"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Rabat/petitBeur.jpg')}
        />
        <RecommendationItem
          name=" Dar El Medina"
          address=" 3 rue benjelloul  , Rabat"
          image={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Rabat/darMedina.jpg')}
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
