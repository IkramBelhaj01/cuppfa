import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const backgroundImage = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/culture1.jpg');

const Culture = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.header}>Découvrir les villes</Text>
        <View style={styles.cityContainer}>
          <TouchableOpacity style={styles.cityButton} onPress={() => navigation.navigate('Agadir')}>
            <Ionicons name="location" size={30} color="black" />
            <Text style={styles.cityButtonText}>Agadir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cityButton} onPress={() => navigation.navigate('Fes')}>
            <Ionicons name="location" size={30} color="black" />
            <Text style={styles.cityButtonText}>Fes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cityButton} onPress={() => navigation.navigate('Tanger')}>
            <Ionicons name="location" size={30} color="black" />
            <Text style={styles.cityButtonText}>Tanger</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cityButton} onPress={() => navigation.navigate('Casablanca')}>
            <Ionicons name="location" size={30} color="black" />
            <Text style={styles.cityButtonText}>Casablanca</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cityButton} onPress={() => navigation.navigate('Rabat')}>
            <Ionicons name="location" size={30} color="black" />
            <Text style={styles.cityButtonText}>Rabat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cityButton} onPress={() => navigation.navigate('Marrakech')}>
            <Ionicons name="location" size={30} color="black" />
            <Text style={styles.cityButtonText}>Marrakech</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // couleur du texte de l'en-tête
  },
  cityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityButton: {
    width: 140,
    height: 140,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  cityButtonText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  backgroundImage: {
    width: '100%',
    height: '105%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Culture;
