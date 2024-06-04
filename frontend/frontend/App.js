import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import WelcomeScreen from './Components/WelcomeScreen';
import Avis from './Components/Avis';
import { NavigationContainer } from "@react-navigation/native";
import InterfaceConnexion from './Components/ConnexionPage/InterfaceConnexion';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sign_in from './Components/Sign_in';

import CalendarPage from './Components/CalendarPage/CalendarPage';
import AccueilPage from './Components/AcceuilPage/AcceuilPage';
import InfosPratique from './Components/InfosPratique';
import Culture from './Components/PageCulture/Culture'; 
import Fes from './Components/PageCulture/Fes';
import Tanger from './Components/PageCulture/Tanger';
import Rabat from './Components/PageCulture/Rabat';
import Agadir from './Components/PageCulture/Agadir';
import Marrakech from './Components/PageCulture/Marrakech';
import Casablanca from './Components/PageCulture/Casablanca';
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
          name="Avis"
          component={Avis}
          options={{ title: 'Avis',
          headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            }, }}
        />
        
        <Stack.Screen
          name="InterfaceConnexion"
          component={InterfaceConnexion}
          options={{ title: '', headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            }, }}
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
          name="CalendarPage"
          component={CalendarPage}
          options={{
              title: 'CalendarPage',
              headerTintColor: 'white', // Couleur du texte du titre en vert
              headerStyle: {
                backgroundColor: 'black', // Couleur de fond du titre en orange
        },
       }}
    />
        <Stack.Screen
          name="Sign_in"
          component={Sign_in}
          options={{ title: 'Inscription' , headerTintColor: 'white', // Couleur du texte du titre en vert
              headerStyle: {
                backgroundColor: 'black', // Couleur de fond du titre en orange
        },}}
        />
        <Stack.Screen
          name="InfosPratique"
          component={InfosPratique}
          options={{ title: 'InfosPratique', 
          headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
            }, }}
        />
        <Stack.Screen
          name="Culture"
          component={Culture}
          options={{ title: 'Culture' , headerTintColor: 'white', 
              headerStyle: {
                backgroundColor: 'black',
        },}} 
        />
        <Stack.Screen
          name="Fes"
          component={Fes}
          options={{ title: 'Fes' , headerTintColor: 'white', 
              headerStyle: {
                backgroundColor: 'black', 
        },}} 
        />
        <Stack.Screen
          name="Tanger"
          component={Tanger}
          options={{ title: 'Tanger' , headerTintColor: 'white', 
              headerStyle: {
                backgroundColor: 'black', 
        },}} 
        />
        <Stack.Screen
          name="Rabat"
          component={Rabat}
          options={{ title: 'Rabat' }} 
        />
        <Stack.Screen
          name="Agadir"
          component={Agadir}
          options={{ title: 'Agadir', headerTintColor: 'white', 
              headerStyle: {
                backgroundColor: 'black', 
        }, }} 
        />
        <Stack.Screen
          name="Marrakech"
          component={Marrakech}
          options={{ title: 'Marrakech' , headerTintColor: 'white', 
              headerStyle: {
                backgroundColor: 'black', 
        },}} 
        />
         <Stack.Screen
          name="Casablanca"
          component={Casablanca}
          options={{ title: 'Casablanca' , headerTintColor: 'white', 
              headerStyle: {
                backgroundColor: 'black', 
        },}} 
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
