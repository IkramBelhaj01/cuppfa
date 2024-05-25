import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function InterfaceConnexion({ navigation }) {
  // Interface de connexion
  return (
    <View style={styles.container}>
      <Text style={styles.authText}>Authentification</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('AccueilPage')} style={styles.button}>
        <Text style={styles.buttonText}>login
        </Text>
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
  authText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InterfaceConnexion;
