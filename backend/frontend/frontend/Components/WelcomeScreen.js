import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Cupculture</Text>
      <Image
        style={styles.image}
        source={require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/logo1-removebg-preview.png')}  
      />
      <Text style={styles.subText}>Explore Sports and culture for your African Cup adventure</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('InterfaceConnexion')} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 5,
  },
  subText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20, // Modifier la marge selon votre mise en page
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
