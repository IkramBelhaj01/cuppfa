import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const backgroundImage = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/back1.jpg'); // Chemin vers votre image d'arrière-plan

const AccueilPage = ({ navigation }) => {
  return (
    
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Bienvenue sur CupCulture</Text>
        
        {/* Boutons avec icônes */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Calendrier')}>
            <Ionicons name="calendar" size={30} color="black" />
            <Text style={styles.menuItemText}>Calendrier</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Recommandations')}>
            <Ionicons name="restaurant" size={30} color="black"/>
            <Text style={styles.menuItemText}>Recommandations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Transport')}>
            <Ionicons name="bus" size={30} color="black" />
            <Text style={styles.menuItemText}>Transport</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Culture')}>
            <Ionicons name="book" size={30} color="black" />
            <Text style={styles.menuItemText}>Culture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Avis')}>
            <Ionicons name="star" size={24} color="black" />
            <Text style={styles.menuItemText}>Avis</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Espacement après le texte de bienvenue
    color: 'white', // Couleur du texte
    marginTop:-70,
    marginBottom:120,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    width: 140,
    height: 140,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Couleur de fond des boutons avec transparence
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10, // Espacement entre les boutons
    
    
  },
  menuItemText: {
    marginTop: 10, // Espacement entre l'icône et le texte
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Centrer le texte
    color: 'black', // Couleur du texte
  },
  backgroundImage: {
    width: '100%', // Ajuster la largeur de l'image à 100% de l'écran
    height: '112%', // Ajuster la hauteur de l'image à 100% de l'écran
    resizeMode: 'cover', // Redimensionner l'image pour couvrir l'écran
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccueilPage;
