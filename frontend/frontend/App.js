import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Cupculture</Text>
      <Image
        style={styles.image}
        source={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/logo1-removebg-preview.png')} 
      />
      <Text style={styles.subText}>Explore Sports and culture for your African Cup adventure</Text>
      
      <TouchableOpacity onPress={() => console.log('Get Started pressed')} style={styles.button}>
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
    marginTop: 80,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
