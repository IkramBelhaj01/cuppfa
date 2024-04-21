
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, ImageBackground, TouchableOpacity, Linking } from 'react-native';

const RabatTransport = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Liste des transports disponibles à Fès
  const transportData = [
    {
      name: "Bus à Rabat",
      description: "Le réseau de bus de Rabat est géré par la Société des Transports de Rabat (STR). Il propose un large éventail de lignes de bus desservant la ville et ses environs. Les bus de la STR sont largement utilisés pour les déplacements intra-urbains et interurbains. Les horaires de bus sont généralement disponibles aux arrêts de bus et sur le site Web de la STR.",
      image: require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Transport/rabatTransport/bus.webp'),
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
        "Gare de Rabat-Ville",
        "Place Al Joulane",
        "Agdal",
        "Hay Riad"
      ]
    },
    {
      name: "Taxis à Rabat",
      description: "Les taxis sont facilement disponibles à Rabat et constituent un moyen pratique de se déplacer en ville. Ils sont généralement de couleur bleue et disposent d'un compteur pour la tarification standard. On peut trouver des taxis dans les stations de taxi désignées ainsi que dans les rues principales.",
      image: require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Transport/rabatTransport/taxi.webp'),
      services: [
        "Taxis conventionnels",
        "Taxis collectifs"
      ],
      tarification: "Tarif de démarrage : 2.50 MAD + 1.60 MAD/km",
      contacts_utiles: {
        numéro_central: "0555-555-555",
        association_taxi: {
          nom: "Association des taxis de Rabat",
          numéro: "0801-234-567"
        }
      }
    },
    {
      name: "Train entre les villes",
      description: "Les trains offrent un moyen confortable et fiable de voyager entre les villes marocaines. Rabat est une plaque tournante importante pour le réseau ferroviaire national, offrant des liaisons vers plusieurs destinations, y compris Casablanca, Fès et Marrakech.",
      image: require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Transport/rabatTransport/train.jpg'),
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
        "Gare de Rabat-Ville",
        "Gare de Casablanca",
        "Gare de Fès",
        "Gare de Marrakech"
      ]
    },
    {
      name: "Bus entre les villes",
      description: "Les bus interurbains sont une option économique pour voyager entre les villes du Maroc. Les principaux opérateurs de bus comme CTM et Supratours offrent un large choix de destinations depuis Rabat.",
      image: require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Transport/rabatTransport/ctm.jpg'),
      website: "https://www.ctm.ma/",
      services: [
        "Bus express",
        "Bus régional"
      ],
      tarifs: {
        Pour: "Les tarifs varient selon l'itinéraire et la classe."
      },
      stations_principales: [
        "Gare routière de Rabat",
        "Gare routière de Casablanca",
        "Gare routière de Fès",
        "Gare routière de Marrakech"
      ]
    }
  ];
  

  // Fonction de filtrage des transports en fonction de la recherche
  const filteredTransportData = transportData.filter(transport =>
    transport.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ImageBackground
      source={require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Transport/fesTransport/back.jpg')}
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
            />
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const TransportItem = ({ name, description, image, website, services, tarifs, stationsPrincipales, contactsUtiles, agencesRecommandees }) => {
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
            {contactsUtiles.associations_taxi && (
              contactsUtiles.associations_taxi.map((association, index) => (
                <Text key={index} style={styles.text}>Association: {association.nom} - Numéro: {association.numéro}</Text>
              ))
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

export default RabatTransport;
      