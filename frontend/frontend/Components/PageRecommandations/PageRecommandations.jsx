import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const backgroundImage = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/back11.jpg');
const mapImage = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/carteMar.png');

const PageRecommandations = ({ navigation }) => {
  // Coordonnées des noms des villes sur la photo 
  const coordinates = {
    Fes: { x: 310, y: 70 },
    Marrakech: { x: 225, y: 145 },
    Rabat: { x: 250, y: 60 },
    Agadir: { x: 190, y: 175 },
    Casablanca: { x: 210, y: 90 },
    Tanger: { x: 285, y: 5 }
  };

  const handleCityClick = (city) => {
    // Redirection vers la page de recommandations de la ville cliquée
    navigation.navigate(`${city}Recommendations`);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <Text style={styles.welcomeText}>Veuiller  choisir une ville :</Text>
        
        {/* Arrière-plan */}
        {/* Centrage de la carte sur la page */}
        <View style={styles.mapContainer}>
          <Image source={mapImage} style={styles.mapImage} />
          {/* Zones cliquables pour les villes */}
          {Object.keys(coordinates).map((city, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.cityMarker, { left: coordinates[city].x, top: coordinates[city].y }]}
              onPress={() => handleCityClick(city)}
            >
              {/* Arrière-plan pour le nom de la ville */}
              <View style={styles.cityBackground}>
                {/* Texte du nom de la ville */}
                <Text style={styles.cityName}>{city}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    padding:8,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  mapContainer: {
    width: 450, 
    height: 400, 
    display: "flex",
    justifyContent: 'center',
    alignItems: 'flex-start',
    
   
  },
  
  mapImage: {
    
  },
  cityMarker: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityBackground: {
    backgroundColor: 'green', 
    padding: 5, 
    borderRadius: 5, 
  },
  cityName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    
    position: 'absolute',
    top: -20, 
  },
});

export default PageRecommandations;
