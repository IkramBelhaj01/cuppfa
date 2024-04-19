import React from 'react';
import { StyleSheet } from 'react-native';
import WelcomeScreen from './Components/WelcomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import InterfaceConnexion from './Components/ConnexionPage/InterfaceConnexion';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccueilPage from './Components/AcceuilPage/AcceuilPage'; // Importez la page d'accueil
import Culture from './Components/PageCulture/Culture'; 
import Fes from './Components/PageCulture/Fes';
import Tanger from './Components/PageCulture/Tanger';
import Rabat from './Components/PageCulture/Rabat';
import Agadir from './Components/PageCulture/Agadir';
import Marrakech from './Components/PageCulture/Marrakech';
import Casablanca from './Components/PageCulture/Casablanca';
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
        <Stack.Screen
          name="AccueilPage"
          component={AccueilPage}
          options={{
              title: 'Accueil',
              headerTintColor: 'white', // Couleur du texte du titre en vert
              headerStyle: {
                backgroundColor: 'black', // Couleur de fond du titre en orange
        },
        }}

        />
        <Stack.Screen
          name="Culture"
          component={Culture}
          options={{ title: 'Culture' }} // Définissez le titre de la page Culture
        />
        <Stack.Screen
          name="Fes"
          component={Fes}
          options={{ title: 'Fes' }} // Définissez le titre de la page Fes
        />
        <Stack.Screen
          name="Tanger"
          component={Tanger}
          options={{ title: 'Tanger' }} // Définissez le titre de la page Tanger
        />
        <Stack.Screen
          name="Rabat"
          component={Rabat}
          options={{ title: 'Rabat' }} // Définissez le titre de la page Rabat
        />
        <Stack.Screen
          name="Agadir"
          component={Agadir}
          options={{ title: 'Agadir' }} // Définissez le titre de la page Agadir
        />
        <Stack.Screen
          name="Marrakech"
          component={Marrakech}
          options={{ title: 'Marrakech' }} // Définissez le titre de la page Marrakech
        />
         <Stack.Screen
          name="Casablanca"
          component={Casablanca}
          options={{ title: 'Casablanca' }} // Définissez le titre de la page Casablanca
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
