
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, ImageBackground, TouchableOpacity, Linking } from 'react-native';

const MarrakeshTransport = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Liste des transports disponibles à Fès
  const transportData = [
    {
      name: "Bus à Fès",
      description: "La Société de Transports de Fès (STF) est l'opérateur principal du réseau de transport en commun de la ville. Elle exploite un vaste réseau de lignes de bus desservant Fès et ses environs. Les bus STF sont souvent utilisés pour les déplacements intra-urbains et interurbains. Les horaires de bus sont généralement disponibles aux arrêts de bus et sur le site Web de la STF.",
      image: require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Transport/fesTransport/bus.avif'),
     
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
        "Gare de Fès",
        "Place R'cif",
        "Bab Boujloud",
        "Borj Fez Mall"
      ]
    },
    {
      name: "Taxis à Fès",
      description: "Les taxis sont omniprésents à Fès et constituent un moyen de transport pratique pour se déplacer en ville. Ils peuvent être trouvés dans les stations de taxi désignées ainsi que dans les rues principales. Les taxis à Fès sont généralement de couleur bleue et fonctionnent selon un système de tarification standard basé sur le compteur. Il est également possible de négocier les tarifs pour les trajets plus longs ou les courses particulières.",
      image: require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Transport/fesTransport/taxi.jpg'),
      services: [
        "Taxis conventionnels",
        "Taxis collectifs"
      ],
      tarification: "Tarif de démarrage : 2.50 MAD + 1.60 MAD/km",
      contacts_utiles: {
        numéro_central: "0555-555-555",
        associations_taxi: [
          {
            nom: "Association des taxis de Fès",
            numéro: "0801-234-567"
          },
          {
            nom: "Association des taxis collectifs",
            numéro: "0801-765-432"
          }
        ]
      }
    },
    {
      name: "Train entre les villes",
      description: "Les trains sont un moyen populaire et pratique de voyager entre les villes marocaines. Ils offrent un service confortable et fiable avec des horaires réguliers. Les principaux itinéraires de train incluent Fès à Rabat, Fès à Casablanca et Fès à Marrakech.",
      image: require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Transport/fesTransport/train.jpg'),
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
        "Gare de Fès",
        "Gare de Rabat",
        "Gare de Casablanca",
        "Gare de Marrakech"
      ]
    },
    {
        name: "Bus entre les villes",
        description: "Les bus interurbains sont un moyen abordable et pratique de voyager entre les villes du Maroc. Ils offrent un large éventail de destinations avec des horaires réguliers. Les principaux opérateurs de bus incluent CTM et Supratours.",
        image: require('D:/3eme annee esisa/cuppfa/frontend/frontend/assets/Transport/fesTransport/ctm.jpg'),
        website: "https://www.ctm.ma/",
        services: [
          "Bus express",
          "Bus régional"
        ],
        tarifs: {
            Pour:"Les tarifs varient selon l'itinéraire et la classe."},
        stations_principales: [
          "Gare routière de Fès",
          "Gare routière de Rabat",
          "Gare routière de Casablanca",
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

export default MarrakeshTransport;
      