import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, ImageBackground, TouchableOpacity, Linking } from 'react-native';

const CasablancaTransport = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Liste des transports disponibles à Casablanca
  const transportData = [
    {
      name: "Bus à Casablanca",
      description: "Le réseau de bus à Casablanca est géré par la Société de Transports de Casablanca (STC). Il couvre un large éventail de lignes desservant la ville et ses environs. Les bus sont couramment utilisés pour les déplacements intra-urbains et interurbains.",
      image: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Transport/casablancaTransport/bus.webp'),
      services: [
        "Lignes de bus intra-urbaines",
        "Lignes de bus interurbaines",
        "Services de nuit (Noctambus)"
      ],
      tarifs: {
        ticket: "6 MAD",
        abonnement_mensuel: "150 MAD",
        abonnement_annuel: "1500 MAD"
      },
      stations_principales: [
        "Gare de Casa Voyageurs",
        "Place des Nations Unies",
        "Marché Central",
        "Maarif"
      ]
    },
    {
      name: "Taxis à Casablanca",
      description: "Les taxis sont facilement accessibles à Casablanca et offrent un moyen pratique de se déplacer en ville. Ils sont généralement de couleur rouge et disposent d'un compteur pour la tarification standard. Il est possible de les trouver dans les stations de taxi désignées ainsi que dans les rues principales.",
      image: require("C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Transport/fesTransport/taxi.jpg"),
      services: [
        "Taxis conventionnels",
        "Taxis collectifs"
      ],
      tarification: "Tarif de démarrage : 2.50 MAD + 1.60 MAD/km",
      contacts_utiles: {
        numéro_central: "0555-555-555",
        association_taxi: {
          nom: "Association des taxis de Casablanca",
          numéro: "0801-234-567"
        }
      }
    },
    {
      name: "Train entre les villes",
      description: "Les trains offrent un moyen confortable et fiable de voyager entre les villes marocaines. Casablanca est une plaque tournante importante pour le réseau ferroviaire national, offrant des liaisons vers plusieurs destinations, y compris Fès, Rabat et Marrakech.",
      image: require("C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Transport/casablancaTransport/casaVoya.jpg"),
      website: "https://www.oncf.ma/",
      services: [
        "Train express",
        "Train régional"
      ],
      tarifs: {
        première_classe: "Varie selon l'itinéraire",
        deuxième_classe: "Varie selon l'itinéraire"
      },
      stations_principales: [
        "Gare de Casa Voyageurs",
        "Gare de Rabat",
        "Gare de Marrakech"
      ]
    },
    {
      name: "Bus entre les villes",
      description: "Les bus interurbains sont une option économique pour voyager entre les villes du Maroc. Les principaux opérateurs de bus comme CTM et Supratours offrent un large choix de destinations depuis Casablanca.",
      image: require("C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Transport/casablancaTransport/gareR.jpg"),
      website: "https://www.ctm.ma/",
      services: [
        "Bus express",
        "Bus régional"
      ],
      tarifs: { Pour:"Les tarifs varient selon l'itinéraire et la classe."},
      stations_principales: [
        "Gare routière de Casablanca",
        "Gare routière de Rabat",
        "Gare routière de Fès",
        "Gare routière de Marrakech"
      ]
    },
    {
      name: "Location de voiture",
      description: "La location de voiture est une option pratique pour explorer Casablanca et ses environs à votre rythme. Plusieurs agences de location de voitures sont disponibles à Casablanca, offrant une gamme de véhicules pour répondre à vos besoins.",
      image: require("C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Transport/casablancaTransport/location.jpg"),
      services: [
        "Large choix de véhicules",
        "Options de location à court et long terme",
        "Assurance et assistance routière disponibles"
      ],
      sites_recommandés: [
        {
          nom: "Avis Car Rental",
          site_web: "https://www.avis.ma/",
          adresse: "Aéroport Mohammed V, Nouasseur, Casablanca"
        },
        {
          nom: "Hertz Car Rental",
          site_web: "https://www.hertz.ma/",
          adresse: "5, Boulevard Abdellatif Ben Kaddour, Casablanca"
        }
      ]
    }
  ];
  

  // Fonction de filtrage des transports en fonction de la recherche
  const filteredTransportData = transportData.filter(transport =>
    transport.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ImageBackground
      source={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/Transport/fesTransport/back.jpg')}
      style={styles.container}
    >
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView} horizontal={true}>
        {filteredTransportData.map((transport, index) => (
          <View key={index} style={styles.transportContainer}>
            <TransportItem
              name={transport.name}
              description={transport.description}
              image={transport.image}
              website={transport.website}
              services={transport.services}
              tarifs={transport.tarifs}
              stationsPrincipales={transport.stations_principales}
              contactsUtiles={transport.contacts_utiles}
              agencesRecommandees={transport.agences_recommandées}
              sitesRecommandes= {transport.sites_recommandés}
            />
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const TransportItem = ({ name, description, image, website, services, tarifs, stationsPrincipales, contactsUtiles, agencesRecommandees, sitesRecommandes }) => {
  return (
    <ScrollView style={styles.itemContainer}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        {website && (
          <TouchableOpacity onPress={() => Linking.openURL(website)}>
            <Text style={styles.link}>Site Web</Text>
          </TouchableOpacity>
        )}
        {services && (
          <View>
            <Text style={styles.subHeading}>Services</Text>
            {services.map((service, index) => (
              <Text key={index} style={styles.text}>{service}</Text>
            ))}
          </View>
        )}
        {tarifs && (
          <View>
            <Text style={styles.subHeading}>Tarifs</Text>
            {Object.entries(tarifs).map(([key, value]) => (
              <Text key={key} style={styles.text}>{key}: {value}</Text>
            ))}
          </View>
        )}
        {stationsPrincipales && (
          <View>
            <Text style={styles.subHeading}>Stations Principales</Text>
            {stationsPrincipales.map((station, index) => (
              <Text key={index} style={styles.text}>{station}</Text>
            ))}
          </View>
        )}
        {contactsUtiles && (
          <View>
            <Text style={styles.subHeading}>Contacts Utiles</Text>
            <Text style={styles.text}>Numéro Central: {contactsUtiles.numéro_central}</Text>
            {contactsUtiles.association_taxi && (
              <Text style={styles.text}>Association: {contactsUtiles.association_taxi.nom} - Numéro: {contactsUtiles.association_taxi.numéro}</Text>
            )}
          </View>
        )}
        {agencesRecommandees && (
          <View>
            <Text style={styles.subHeading}>Agences Recommandées</Text>
            {agencesRecommandees.map((agence, index) => (
              <TouchableOpacity key={index} onPress={() => Linking.openURL(agence.site_web)}>
                <Text style={styles.link}>{agence.nom}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {sitesRecommandes && (
          <View>
            <Text style={styles.subHeading}>Sites Recommandés</Text>
            {sitesRecommandes.map((site, index) => (
              <TouchableOpacity key={index} onPress={() => Linking.openURL(site.site_web)}>
                <Text style={styles.link}>{site.nom}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    padding:40,
   
  },
  searchBarContainer: {
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  scrollView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  transportContainer: {
    marginRight: 10,
    padding:15,
  },
  itemContainer: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
    padding:10,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  link: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
});

export default CasablancaTransport;
