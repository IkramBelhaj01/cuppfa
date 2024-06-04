import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Menu({navigation}) {
  return (
    <View style={styles.container}>
      {/* Barre supérieure */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Maroc, Terre de Football</Text>
      </View>
      
      {/* Barre inférieure */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Text style={styles.bottomBarItemText}>Découvrir le Maroc</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Text style={styles.bottomBarItemText}>Destination Experience</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Text style={styles.bottomBarItemText}>Maroc Terre de Lumière</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Text style={styles.bottomBarItemText}>Idées de Voyage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Text style={styles.bottomBarItemText}>Info Pratique</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('InfosPratique')} style={styles.button}>
              <Text style={styles.buttonText}>Aide</Text>
            </TouchableOpacity>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  bottomBarItem: {
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
  bottomBarItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Menu;
