import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Text, ImageBackground, KeyboardAvoidingView, Alert } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native'; // Ensure to import useFocusEffect

function InterfaceConnexion({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      // Clear input fields when the screen is focused
      setEmail('');
      setPassword('');
      return () => {
        // Optionally do something when the screen loses focus
      };
    }, [])
  );

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Validation Error", "Email and password are required.");
      return;
    }

    try {
      const response = await axios.post('http://192.168.100.115:5000/api/user/signin', {
        email, password
      });

      if (response.data.success) {
        navigation.navigate('AccueilPage'); // Assuming 'AccueilPage' is a valid route
      } else {
        Alert.alert("Login Failed", response.data.message);
      }
    } catch (error) {
      console.error('Error connecting to the server:', error);
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        console.log(error.response.data);
        Alert.alert("Login Error", error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        Alert.alert("Network Error", "No response from server");
      } else {
        // Something else caused the error
        console.log('Error', error.message);
      }
    }
  };

  return (
    <ImageBackground
      source={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/09-8.jpg')} 
      style={styles.background}
      blurRadius={5}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.innerContainer}>
          <Text style={styles.subText}>Login</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address" // Facilitates email input
              autoCapitalize="none" // Ensures email is entered in lower case
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry={true} // Hides password input
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sign_in')} style={styles.button}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '80%',
    alignItems: 'center',
  },
  subText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    color: 'white',
    marginBottom: 8,
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    maxWidth: 300, 
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 10,
    width: 90,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InterfaceConnexion;
