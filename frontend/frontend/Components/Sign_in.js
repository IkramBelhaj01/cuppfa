import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Text, ImageBackground, KeyboardAvoidingView, Alert } from 'react-native';
import axios from 'axios'; // Make sure to install axios if not already installed

function Sign_in({ navigation }) {
  // Adding state to manage email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegistration = async () => {
    if (!email || !password) {
      Alert.alert("Validation Error", "Both email and password are required.");
      return;
    }
  
    try {
      const response = await axios.post('http://192.168.100.115:5000/api/user/signup', {
        email,
        password
      });
  
      if (response.data.success) {
        // Alert with an option to go to the login page
        Alert.alert(
          "Registration Successful",
          "Your account has been created successfully! Please log in to continue.",
          [
            { text: "OK", onPress: () => navigation.navigate('InterfaceConnexion') }
          ]
        );
      } else {
        if (response.status === 409) {
          Alert.alert("Registration Failed", "This email is already in use.");
        } else {
          Alert.alert("Registration Failed", response.data.message || "Unknown error occurred");
        }
      }
    } catch (error) {
      console.error('Error connecting to the server:', error);
      if (error.response && error.response.status === 409) {
        Alert.alert("Registration Error", "This email is already in use.");
      } else {
        Alert.alert("Network Error", "Could not connect to the server. Try again later.");
      }
    }
  };
  
  

  return (
    <ImageBackground
      source={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/AcceuilPage/photos/stock.jpg')} 
      style={styles.background}
      blurRadius={5}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled keyboardVerticalOffset={100}>
        <View style={styles.innerContainer}>
          <Text style={styles.subText}>Sign Up</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleRegistration} style={styles.button}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('InterfaceConnexion')} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Already a member? Log in</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    color: 'white',
    width: 100,
    fontWeight: 'bold'
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  loginButton: {
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 14,

  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'black',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 10,
    width: 90,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Sign_in;
