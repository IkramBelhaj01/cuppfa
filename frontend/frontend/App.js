import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import WelcomeScreen from './Components/WelcomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import InterfaceConnexion from './Components/ConnexionPage/InterfaceConnexion';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sign_in from './Components/Sign_in';
import Menu from './Components/Menu';
import InfosPratique from './Components/InfosPratique';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome to Cupculture"
          component={WelcomeScreen}
          options={{
            headerTitle: (props) => (
              <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Welcome to Cupculture</Text>
                <Image
                  source={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/logo1-removebg-preview.png')}
                  style={styles.logo}
                />
                
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="InterfaceConnexion"
          component={InterfaceConnexion}
          options={{ title: 'Interface Connexion' }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ title: 'Menu' }}
        />
        <Stack.Screen
          name="Sign_in"
          component={Sign_in}
          options={{ title: 'Inscription' }}
        />
        <Stack.Screen
          name="InfosPratique"
          component={InfosPratique}
          options={{ title: 'InfosPratique' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 250,
    height: 50,
    resizeMode: 'contain',
  },
  
  
  
  
});
