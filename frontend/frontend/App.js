import React from 'react';
import { StyleSheet } from 'react-native';
import WelcomeScreen from './Components/WelcomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import InterfaceConnexion from './Components/ConnexionPage/InterfaceConnexion';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="InterfaceConnexion"
          component={InterfaceConnexion}
          options={{ title: 'Interface Connexion' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
