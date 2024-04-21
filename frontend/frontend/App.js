import React from 'react';
import { StyleSheet } from 'react-native';
import WelcomeScreen from './Components/WelcomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import InterfaceConnexion from './Components/ConnexionPage/InterfaceConnexion';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccueilPage from './Components/AcceuilPage/AcceuilPage'; // Importez la page d'accueil
//Recommendations
import PageRecommandations from './Components/PageRecommandations/PageRecommandations'; 
import FesRecommendations from './Components/PageRecommandations/FesRecommendations'; 
import MarrakechRecommendations from './Components/PageRecommandations/MarrakechRecommendations'; 
import AgadirRecommendations from './Components/PageRecommandations/AgadirRecommendations'; 
import CasablancaRecommendations from './Components/PageRecommandations/CasablancaRecommendations'; 
import RabatRecommendations from './Components/PageRecommandations/RabatRecommendations'; 
import TangerRecommendations from './Components/PageRecommandations/TangerRecommendations'; 
//transport
import PageTransport from './Components/PageTransport/PageTransport';
import FesTransport from './Components/PageTransport/FesTransport';
import AgadirTransport from './Components/PageTransport/AgadirTransport';
import CasablancaTransport from './Components/PageTransport/CasablancaTransport';
import MarrakechTransport from './Components/PageTransport/MarrakechTransport';
import RabatTransport from './Components/PageTransport/RabatTransport';
import TangerTransport from './Components/PageTransport/TangerTransport';



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
          name="PageRecommandations"
          component={PageRecommandations}
          options={{
            title: 'Recommandations',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
        <Stack.Screen
          name="FesRecommendations"
          component={FesRecommendations}
          options={{
            title: ' Fès',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
        <Stack.Screen
          name="MarrakechRecommendations"
          component={MarrakechRecommendations}
          options={{
            title: ' Marrakech',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
        <Stack.Screen
          name="AgadirRecommendations"
          component={AgadirRecommendations}
          options={{
            title: ' Agadir',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
        <Stack.Screen
          name="CasablancaRecommendations"
          component={CasablancaRecommendations}
          options={{
            title: ' Casablanca',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
        <Stack.Screen
          name="RabatRecommendations"
          component={RabatRecommendations}
          options={{
            title: ' Rabat',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
        <Stack.Screen
          name="TangerRecommendations"
          component={TangerRecommendations}
          options={{
            title: ' Tanger',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
        <Stack.Screen
          name="PageTransport"
          component={PageTransport}
          options={{
            title: 'Page Transport',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
        <Stack.Screen
          name="FesTransport"
          component={FesTransport}
          options={{
            title: 'Fès',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
          
        />
        <Stack.Screen
          name="AgadirTransport"
          component={AgadirTransport}
          options={{
            title: 'Agadir',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
          
        />
        <Stack.Screen
          name="CasablancaTransport"
          component={CasablancaTransport}
          options={{
            title: 'Casablanca',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
          
        />
        <Stack.Screen
          name="MarrakechTransport"
          component={MarrakechTransport}
          options={{
            title: 'Marrakech',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
          
        />
        <Stack.Screen
          name="RabatTransport"
          component={RabatTransport}
          options={{
            title: 'Rabat',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
          
        />
        <Stack.Screen
          name="TangerTransport"
          component={TangerTransport}
          options={{
            title: 'Tanger',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
          
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
