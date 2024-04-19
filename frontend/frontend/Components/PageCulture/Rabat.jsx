import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window'); // Obtenez la largeur de l'écran

const backgroundImage1 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/ra12.jpg');
const backgroundImage2 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/r14.jpg');
const backgroundImage3 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/ra11.jpg'); // Images de fond pour Fes
const articleImage = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/ra13.jpg'); // Image d'article pour Fes
const articleImage1 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/r2.jpg'); 
const articleImage2 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/r3.jpg');
const articleImage3 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/r4.jpg');
const articleImage4 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/r5.jpg');
const articleImage5 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/r6.jpg');
const articleImage6 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/r7.jpg');
const articleImage7 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/ra12.jpg');
const articleImage8 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/koraR.jpg');

const Rabat = () => {
  const scrollViewRef = useRef();

  const scrollToMedina = () => {
    scrollViewRef.current.scrollTo({ y: 4100, animated: true }); // Position de la section Medina
  };

  const scrollToSport = () => {
    scrollViewRef.current.scrollTo({ y: 8000, animated: true }); // Position de la section Sport
  };

  const scrollToNature = () => {
    scrollViewRef.current.scrollTo({ y: 3200, animated: true }); // Position de la section Nature
  };

  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      <Swiper style={styles.wrapper} showsButtons={false} loop={false} autoplay={false} showsPagination={false}>
        <ImageBackground source={backgroundImage1} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>RABAT,UNE CAPITALE A VIVRE </Text>
          </View>
        </ImageBackground>
        <ImageBackground source={backgroundImage2} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>RABAT,UNE CAPITALE A VIVRE</Text>
          </View>
        </ImageBackground>
        <ImageBackground source={backgroundImage3} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>RABAT,UNE CAPITALE A VIVRE</Text>
          </View>
        </ImageBackground>
      </Swiper>
      <View style={styles.contentContainer}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>RABAT,LA CAPITALE DU MAROC</Text>
        </View>
        <View style={styles.articleContainer}>
          <View style={styles.articleContent}>
            <View style={styles.imageContainer}>
              <Image source={articleImage} style={styles.articleImage} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.articleText}>
              Rabat est une ville culturelle chargée d'histoire. De nombreux chefs-d'œuvre décorent ses rues et ses places. Visitez la Kasbah des Oudayas : silhouette majestueuse et formidable qu'adoucissent les jardins alentours. 
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.articleContainer}>
          <View style={styles.articleContent}>
            <View style={styles.textContainer}>
              <Text style={styles.articleText}>
              Non loin des murailles s'élèvent les murs du Chellah, une nécropole du temps des Mérinides. En franchir l'enceinte, c'est pénétrer dans un autre monde : vous vous promenez au milieu d'antiques vestiges, parmi les jardins et les cigognes.
              </Text>
            </View>
          </View>
        </View>
        
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={scrollToMedina}>
          <Text style={styles.buttonText}>Medina à Rabat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={scrollToSport}>
          <Text style={styles.buttonText}>Sport à Rabat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={scrollToNature}>
          <Text style={styles.buttonText}>Nature à Rabat</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle1}>Visiter Rabat : les 7 choses incontournables à faire</Text>
      </View>
      <Text style={styles.articleText1}>
      Située sur le littoral atlantique, Rabat est la capitale politique et administrative du Maroc, et la deuxième plus grande agglomération du royaume. Ville impériale inscrite en 2013 au patrimoine mondial de l’Unesco, elle fut fondée au XII° siècle par le grand sultan almohade « Abd al Moumen« , dont le ribat (un camp religieux et militaire comprenant une citadelle et d’immenses remparts) fut rien de moins que le point de départ des incursions arabes en Espagne : dès lors, les musulmans installés en Andalousie firent l’âge d’or de la ville en lui conférant un rôle commercial et artisanal de premier plan.
      </Text>
      
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>1. Le zoo de Rabat</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage1} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        Le jardin zoologique est un lieu prisé à ne pas manquer quand on vient visiter Rabat : il détient le plus grand nombre de lions de l’Atlas en captivité, et forme un biotope artificiel abritant plus de 130 espèces animales originaires des montagnes de l’Atlas, du désert typique d’Afrique du Nord ainsi que de la savane. Une visite intéressante à faire en famille !
      </Text>

      <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>2.Le Musée de l’histoire et des civilisations</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage2} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        Anciennement dénommé « Musée archéologique », le Musée de l’histoire et des civilisations est un témoin de l’histoire riche du Maroc depuis la Préhistoire jusqu’à l’époque islamique, et présente des objets anciens provenant de fouilles, ainsi que des descriptions extrêmement détaillées du mode de vie ancestral des tribus du Maghreb.
        Pour une somme dérisoire, il vous sera possible d’admirer les outils d’hommes préhistoriques, des statuettes issues du Néolithique, comme des divinités romaines, ou des céramiques, vestiges de l’Aube de l’époque musulmane ; les bustes en bronze de Juba II et du grand Caton, la célèbre statue de l’éphèbe couronné, ou encore le chien de Volubilis.
        
      </Text>

      <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>3. La cathédrale Saint-Pierre</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage3} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Construite en 1930 dans le quartier Hassan, sur la place du Golan, la cathédrale Saint-Pierre est le siège de l’archidiocèse de Rabat ; le Maroc a de tout temps vu les différentes religion du Livre cohabiter en paix, et c’est donc tout à fait naturellement que les édifices religieux chrétiens et juifs trouvèrent leur place en son sein. Ce qui est plus étonnant, c’est de visiter rabat et de tomber sur une cathédrale construite dans le plus pur style art déco : sa forme géométrique très particulière et sa blancheur immaculée rappellent celles des cristaux de neige ! Il est possible de la visiter, et l’intérieur est tout aussi surprenant.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>4. Le jardin d’essais botaniques</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage4} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Créé à l’initiative du Maréchal Lyautey, en 1914, le jardin d’essais botaniques avait pour but de mettre en lumière plus de 250 arbres fruitiers et plantes ornementales provenant de régions variées du monde.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>5. La nécropole de Chellah</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage5} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Située sur l’emplacement de l’ancienne cité romaine de Sala Colonia, à 2 km au sud-est du centre-ville, la nécropole de Chellah est considérée par tous les voyageurs venus visiter Rabat comme un endroit rempli de mystère et.. le lieu le plus romantique du pays.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>6.  Le souk de Rabat</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage6} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Ce dernier prend place sur la rue des Consuls et débouche sur la Kasbah des Oudayas ; bien qu’il ne soit pas aussi majestueux que celui de Marrakech ou de la médina d’Essaouira, il fait tout de même office de halte appréciable quand on vient visiter Rabat ! Il s’étend sur plus d’un kilomètre et, détail important qui séduira les plus étourdis : l’absence de ruelles tortueuses leur évitera de se perdre comme dans celui de Marrakech, par exemple, ou des dizaines de touristes peinent à retrouver leur chemin !
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>7.  Tour Hassan</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage7} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        La Tour Hassan est l'un des monuments les plus importants du Maroc. Situé dans la capitale du pays, à Rabat, ce monument est un en fait le minaret d'une mosquée construite en 1196 et inachevée. Haute de 44 mètres, cette tour de style arabo-andalou représente le projet du sultan Yacoub El Mansour (de la dynastie des Almohades) qui souhaitait alors édifier la plus grande mosquée du monde (à l'époque).

        La mosquée ne fût jamais terminée mais plus de huit siècles plus tard, la Tour Hassan subsiste. La beauté du lieu est indéniable. L'emplacement de Tour Hassan a d'ailleurs été choisie pour ériger le mausolée Mohammed V.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>8.  Complexe Moulay Abdellah à Rabat</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage8} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        D'une capacité de 45 000 places mais ayant déjà accueilli jusqu'à 66 000 personnes, le Complexe Moulay Abdellah est l'un des fleurons des infrastructures sportives marocaines. Il a déjà abrité des matchs lors de la CAN féminine en 2022 et de la Coupe du monde des clubs début 2023 et a été le théâtre de la finale des deux compétitions. Son architecture moderne et sa proximité avec les commodités en font un choix privilégié pour les grands événements.
        </Text>
      <TouchableOpacity style={styles.scrollUpButton} onPress={() => scrollUp()}>
        <Text style={styles.scrollUpText}>↑</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scrollDownButton} onPress={() => scrollDown()}>
        <Text style={styles.scrollDownText}>↓</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    height: 300, // Définissez la hauteur du Swiper
  },
  backgroundImage: {
    width: width,
    height: 300,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 90,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  subtitleContainer: {
    marginTop: 10,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#BA0021',
  },
  subtitle1: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#BA0021',
    marginLeft:20,
  },
  subtitle2: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#BA0021',
    
  },
  articleContainer: {
    marginBottom: -4,
  },
  articleContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  imageContainer: {
    marginRight: 20,
    marginTop:20,
  },
  articleImage: {
    width: 200,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  articleImage1: {
    width: 380,
    height: 210,
    resizeMode: 'cover',
    borderRadius: 10,
    marginLeft:20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 2,
    marginTop: 0,
  },
  articleText: {
    fontSize: 18,
    color: 'black',
    marginTop:20,
  },
  articleText1: {
    fontSize: 18,
    color: 'black',
    marginTop:10,
    marginLeft:20,
    textAlign:"justify",
    marginRight:10,
  },
  scrollUpButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollDownButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollUpText: {
    color: 'white',
    fontSize: 20,
  },
  scrollDownText: {
    color: 'white',
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#BA0021',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Rabat;
