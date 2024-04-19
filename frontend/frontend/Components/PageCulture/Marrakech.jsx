import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window'); // Obtenez la largeur de l'écran

const backgroundImage1 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/ma22.jpg');
const backgroundImage2 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/ma1.jpg');
const backgroundImage3 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/ma2.jpg'); // Images de fond pour Fes
const articleImage = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/ma.jpg'); // Image d'article pour Fes
const articleImage1 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/mm1.jpg'); 
const articleImage2 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/m1.jpg');
const articleImage3 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/m2.jpg');
const articleImage4 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/m3.jpg');
const articleImage5 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/m4.jpg');
const articleImage6 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/m5.jpg');
const articleImage7 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/m6.jpg');
const articleImage8 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/m7.jpg');
const articleImage9 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/m8.jpg');
const articleImage10 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/m9.jpg');
const articleImage11 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/m10.jpg');
const articleImage12= require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/mm12.jpg');
const articleImage13 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/mm13.jpg');
const articleImage14 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/m13.jpg');
const articleImage15 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/koraM.jpg');
const Marrakech = () => {
  const scrollViewRef = useRef();

  const scrollToMedina = () => {
    scrollViewRef.current.scrollTo({ y: 3100, animated: true }); // Position de la section Medina
  };

  const scrollToSport = () => {
    scrollViewRef.current.scrollTo({ y: 9000, animated: true }); // Position de la section Sport
  };

  const scrollToNature = () => {
    scrollViewRef.current.scrollTo({ y: 1700, animated: true }); // Position de la section Nature
  };

  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      <Swiper style={styles.wrapper} showsButtons={false} loop={false} autoplay={false} showsPagination={false}>
        <ImageBackground source={backgroundImage1} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>MARRAKECH, L'INCONTOURNABLE </Text>
          </View>
        </ImageBackground>
        <ImageBackground source={backgroundImage2} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>MARRAKECH, L'INCONTOURNABLE </Text>
          </View>
        </ImageBackground>
        <ImageBackground source={backgroundImage3} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>MARRAKECH, L'INCONTOURNABLE </Text>
          </View>
        </ImageBackground>
      </Swiper>
      <View style={styles.contentContainer}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>MARRAKECH, LA VILLE OCRE</Text>
        </View>
        <View style={styles.articleContainer}>
          <View style={styles.articleContent}>
            <View style={styles.imageContainer}>
              <Image source={articleImage} style={styles.articleImage} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.articleText}>
              Entre tradition et modernité, Marrakech est la promesse de sensations incomparables. En déambulant sur la place Jemaa El-Fna et dans les souks aux couleurs chatoyantes et aux odeurs orientales, la ville rouge répond d'un claquement de doigts à vos envies de dépaysement.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.articleContainer}>
          <View style={styles.articleContent}>
            <View style={styles.textContainer}>
              <Text style={styles.articleText}>
              En 2016, Marrakech accueille la Cop22 pour lutter contre le changement climatique, comme une reconnaissance de sa nouvelle stature internationale et de ses formidables capacités d'accueil.
              </Text>
            </View>
          </View>
        </View>
        
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={scrollToMedina}>
          <Text style={styles.buttonText}>Medina à Marrakech</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={scrollToSport}>
          <Text style={styles.buttonText}>Sport à Marrakech</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={scrollToNature}>
          <Text style={styles.buttonText}>Nature à Marrakech</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle1}>Visiter Marrakech : quelles sont les meilleures choses à voir dans la Ville Rouge ?</Text>
      </View>
      <Text style={styles.articleText1}>
      Destination animée et passionnante, Marrakech offre un mélange parfait de culture, de paysages magnifiques, et une architecture fascinante. Celle qu’on surnomme « La Perle du Sud » ou encore « La Ville Rouge », bien qu’on la dise défigurée par le tourisme de masse, possède une myriade de lieux d’intérêt qui ne vous feront pas hésiter deux fois lorsque vous devrez prendre vos billets d’avion pour visiter Marrakech !
      </Text>
      
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>1. la Palmeraie de Marrakech</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage1} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        La Palmeraie de Marrakech compte plus de 100.000 arbres sur environ 15.000 hectares, principalement des palmiers ainsi qu’une production de dattes et un potager. C’est un patrimoine naturel et touristique très connu au Maroc que vous devez absolument faire si vous venez visiter Marrakech.
      </Text>

      <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>2.Se baigner aux Cascades d’Ouzoud</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage2} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        Situées à environ 150 kilomètres de Marrakech, il est impossible de passer à côté des cascades d’Ouzoud si vous venez visiter Marrakech ! Considérées comme les plus belles et les plus hautes cascades du Maroc, vous pourrez alors vous y baigner, pique-niquer mais aussi faire la rencontre des singes locaux.
      </Text>

      <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>3. la Place Jemaa el-Fna</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage3} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Vous passerez sûrement sur la Place Jemaa el-Fna (« place des trépassés ») si vous venez visiter Marrakech. Cette célèbre place publique attire plus d’un million de visiteurs chaque année. « L’espace culturel de la place Jemaa el-Fna » est inscrit au patrimoine culturel immatériel depuis 2008 et au patrimoine mondial depuis 1985 par l’Unesco.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>4. Se détendre au Jardin Majorelle</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage4} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Immanquable dans la nouvelle ville : le Jardin Majorelle, ce magnifique jardin botanique aux couleurs bleutées. Il a appartenu au créateur de mode Yves Saint Laurent. À sa mort en 2008, ses cendres ont été dispersées dans le jardin.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>5. la Médina de Marrakech</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage5} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Cœur historique de Marrakech, et inscrite au patrimoine mondial de l’Unesco, la Médina est l’endroit où vous devez aller si vous voulez visiter Marrakech et son côté historique et traditionnel !
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>6.  désert de Zagora</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage6} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Le désert de Zagora est l’un des endroits les plus fascinants du Maroc, un incontournable pour les amateurs de voyages et d’aventures. Fait de dunes de sable, de montagnes, de palmeraies et de villages berbères, on peut y pratiquer des randonnées à dos de chameau, des treks à travers les dunes ou encore rencontrées avec les populations locales.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>7. le Palais de la Bahia</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage7} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Comme nous nous le disions précédemment, impossible de visiter Marrakech sans découvrir ses magnifiques palais ! Ancien palais du XIXe siècle de huit hectares, le Palais de la Bahia est l’un des chefs-d’œuvre de l’architecture marocaine et de l’art islamique, un des monuments majeurs du patrimoine culturel du pays, et un des principaux lieux de tourisme au Maroc !
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>8.  l’Oasiria Marrakech</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage8} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Que faire à Marrakech lorsqu’on a des enfants ou que l’on veut se baigner pour échapper à la chaleur écrasante de la ville ? Direction Oasiria Marrakech, bien sûr ! Il s’agit là du premier parc aquatique du Maroc où les petits comme les grands pourront profiter d’un moment d’amusement mais surtout de rafraichissement !
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>9. le Musée de Marrakech</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage9} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        En plus d’en apprendre sur l’Histoire de Marrakech, une visite au Musée de Marrakech vous donnera l’occasion d’apprécier l’une des plus belles architectures de la ville. Installé dans le centre de Marrakech, c’est un incontournable à faire dans la ville rouge !
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>10. Passer une nuit dans le désert d’Agafay</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage10} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Situé à seulement 40 minutes de Marrakech, le désert d’Agafay est le joyau caché du Maroc, et l’une des meilleures excursions à faire depuis Marrakech. De l’iconique promenade à dos de chameau au coucher du soleil à des excursions en buggys, ce désert offre une panoplie d’expériences inoubliables.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>11. Grimper les montagnes de l’Atlas</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage11} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        À quelques heures de voiture de Marrakech, la Vallée de l’Ourika dans le haut Atlas marocain est un véritable spectacle à voir. La température peut chuter, apportez donc un petit pull ou une veste et prenez vos meilleures chaussures de marche.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>12. Faire un vol en montgolfière</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage12} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Prêt pour une expérience exceptionnelle en montgolfière ? Découvrez Marrakech de manière unique grâce à une vue aérienne spectaculaire sur la « perle du sud » et ses villages perchés, avec le ciel pur du Maroc comme toile de fond
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>13. Faire un cours de cuisine marocaine</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage13} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Participez à une immersion authentique dans la cuisine marocaine, en partageant les traditions locales avec des passionnés de cuisine. Commencez par explorer le marché local, hors des sentiers touristiques, en achetant des ingrédients frais parmi les étals colorés.
        </Text>
        
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>14.  la Mosquée Koutoubia</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage14} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Cette magnifique mosquée sunnite du XIIème siècle, dont le minaret surplombe les alentours, est un des incontournables à faire à Marrakech. Son architecture et son décor ascétique illustrent parfaitement l’art des Almohades ! Située à la Médina de Marrakech, la mosquée de la Koutoubia vous offre une parenthèse solennelle dans la ville rouge.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>15.  Stade de Marrakech</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage15} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Avec une capacité de 45 000 places, le Stade de Marrakech combine modernité et tradition. Ayant déjà servi de théâtre pour la Coupe du monde des clubs 2022, il est équipé des meilleures installations pour assurer le confort des joueurs et des fans.
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
    textAlign:'justify'
  },
  articleContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    textAlign:'justify'
  },
  imageContainer: {
    marginRight: 20,
    marginTop:20,
  },
  articleImage: {
    width: 200,
    height: 470,
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
    paddingVertical: 13,
    paddingHorizontal: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default Marrakech;
