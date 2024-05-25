import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { Video } from 'expo-av';

import VideoSource from 'C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/videos/Morocco.mp4';

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Video
        source={VideoSource} 
        style={styles.backgroundVideo}
        resizeMode="cover"
        shouldPlay
        isMuted
      />
     
     
      <Text style={styles.subText}></Text>
      <TouchableOpacity onPress={() => navigation.navigate('InterfaceConnexion')} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'flex-end', 
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor:'black',
  },
 
 
 
  button: {
    padding: 5,
    marginTop: 10,
    width: '30%',
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
 
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    
    width: '120%', 
    height: '120%', 
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default WelcomeScreen;