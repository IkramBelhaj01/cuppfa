import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground,Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import axios from 'axios'; 
const backgroundImage = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/AcceuilPage/photos/stock.jpg'); // Chemin vers votre image d'arrière-plan

const AccueilPage = ({ navigation }) => {
  const handleLogout = async () => {
    console.log("Tentative de déconnexion"); // Ceci est pour le débogage
  
    try {
        const response = await axios.post('http://192.168.100.115:5000/api/user/logout');
        console.log(response.data); // Affiche la réponse du serveur
        Alert.alert("Déconnexion", "Vous êtes déconnecté.");
        navigation.navigate('InterfaceConnexion');
    } catch (error) {
        console.error('Erreur lors de la déconnexion :', error);
        Alert.alert("Erreur", "Échec de la déconnexion");
    }
  };
  

  return (
    
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
     {/* Bouton de déconnexion placé en haut à droite */}
     <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
   
    <Text style={styles.logoutText}>Déconnexion</Text>
</TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Bienvenue sur CupCulture</Text>
        
        {/* Boutons avec icônes */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CalendarPage')}>
            <Ionicons name="calendar" size={30} color="black" />
            <Text style={styles.menuItemText}>Calendrier</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PageRecommandations')}>
            <Ionicons name="restaurant" size={30} color="black"/>
            <Text style={styles.menuItemText}>Recommandations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PageTransport')}>
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
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('InfosPratique')}>
            <Ionicons name="star" size={24} color="black" />
            <Text style={styles.menuItemText}>InfosPratique</Text>
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
    top:-60,
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
