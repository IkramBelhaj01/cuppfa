import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';


const { width } = Dimensions.get('window'); // Obtenez la largeur de l'écran

const backgroundImage1 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/fes1.jpg');
const backgroundImage2 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/fes3.jpg');
const backgroundImage3 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/fes4.jpg'); // Images de fond pour Fes
const articleImage = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/fes2.jpg'); // Image d'article pour Fes
const articleImage1 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/magasin-medina-fes.jpg.jpg'); 
const articleImage2 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/tanneries-traditionnelles-medina-fes-maroc-2.jpg.jpg');
const articleImage3 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/fondouk-el-nejjarine-fes.jpg.jpg');
const articleImage4 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/souk-typique-fes.jpg.jpg');
const articleImage5 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/mosquee-karaouiyne-fes.jpg.jpg');
const articleImage6 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/medersa-attarine-fes.jpg.jpg');
const articleImage7 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/porte-bleue-medina-fes-maroc.jpg.jpg');
const articleImage8 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/place-seffarine-fes.jpg.jpg');
const articleImage9 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/medersa-attarine-fes.jpg.jpg');
const articleImage10 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/palais-musee-dar-batha-fes.jpg.jpg');
const articleImage11 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/palais-royal-fes-dar-el-makhzen.jpg.jpg');
const articleImage12 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/koraFes.jpg');
const articleImage13 = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/assets/imouzar.jpg');
const Fes = () => {
  const scrollViewRef = useRef();

  const scrollToMedina = () => {
    scrollViewRef.current.scrollTo({ y: 1100, animated: true }); // Position de la section Medina
  };

  const scrollToSport = () => {
    scrollViewRef.current.scrollTo({ y: 6200, animated: true }); // Position de la section Sport
  };

  const scrollToNature = () => {
    scrollViewRef.current.scrollTo({ y: 8000, animated: true }); // Position de la section Nature
  };

  


  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      <Swiper style={styles.wrapper} showsButtons={false} loop={false} autoplay={false} showsPagination={false}>
        <ImageBackground source={backgroundImage1} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>FÈS, LA PERLE IMPÉRIALE</Text>
          </View>
        </ImageBackground>
        <ImageBackground source={backgroundImage2} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>FÈS, LA PERLE IMPÉRIALE</Text>
          </View>
        </ImageBackground>
        <ImageBackground source={backgroundImage3} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>FÈS, LA PERLE IMPÉRIALE</Text>
          </View>
        </ImageBackground>
      </Swiper>
      <View style={styles.contentContainer}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>FÈS, DÉPOSITAIRE DE L'HISTOIRE MAROCAINE</Text>
        </View>
        <View style={styles.articleContainer}>
          <View style={styles.articleContent}>
            <View style={styles.imageContainer}>
              <Image source={articleImage} style={styles.articleImage} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.articleText}>
                Fès rayonne d'une aura singulière. Elle est l'Impériale, la dépositaire de treize siècles d'histoire marocaine.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.articleContainer}>
          <View style={styles.articleContent}>
            <View style={styles.textContainer}>
              <Text style={styles.articleText}>
                Fès est riche d'un passé prestigieux et réserve des surprises inattendues.

                Franchissez les murs de la fameuse médina de Fès, distinguée par l'UNESCO en tant que valeur universelle exceptionnelle. Promenez-vous au hasard des rues du quartier Fès-El-Bali. La porte Bab Boujloud est l'accès le plus simple pour pénétrer dans la médina.
                
              </Text>
            </View>
          </View>
        </View>
        
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={scrollToMedina}>
          <Text style={styles.buttonText}>Medina à Fès</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={scrollToSport}>
          <Text style={styles.buttonText}>Sport à Fès</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={scrollToNature}>
          <Text style={styles.buttonText}>Nature à Fès</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle1}>Visiter Fès : les 11 choses incontournables à faire</Text>
      </View>
      <Text style={styles.articleText1}>
        Fès est riche d'un passé prestigieux et réserve des surprises inattendues.
        Franchissez les murs de la fameuse médina de Fès, distinguée par l'UNESCO en tant que valeur universelle exceptionnelle. Promenez-vous au hasard des rues du quartier Fès-El-Bali. La porte Bab Boujloud est l'accès le plus simple pour pénétrer dans la médina.       
      </Text>
      
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>1.LA MEDINA</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage1} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        Découvrir la médina est toute une aventure en soi car elle ne se dévoile pas au voyageur pressé.
         Il faut apprendre à apprécier ce lieu, à comprendre ses codes, à se laisser porter par les cris, 
         les odeurs, la chaleur qui se dégagent de toutes les échoppes. Il faut être prêt à l’imprévu. 
         La médina de Fès est inscrite au patrimoine mondial de l’UNESCO car elle abrite, en vérité, la plus vieille université du monde musulman. Les principaux sites de la médina à visiter datent du 13e et 15e siècle et ce sont la médersa, le palais, les mosquées et les fontaines.
      </Text>

      <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>2. Les tanneurs de cuir</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage2} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        C’est une catégorie à part dans les souks, les tanneurs de cuir ne laissent personne indifférent, notamment à cause de l’odeur incroyable qui se dégage de leur atelier. Pour ceux qui ne sont pas habitués, cette odeur peut être pestilentielle. Mais en sortant de l’atelier, on vous offrira une boisson à la menthe pour masquer (légèrement) l’odeur. Un métier difficile qu’il faut découvrir pour comprendre. 
      </Text>

      <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>3. Les fondouks</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage3} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Il faut savoir que le fondouk est un caravansérail : c’est un édifice à étage qui a été conçu autour d’une cour carrée. Celui de Fès vaut le coup d’œil car il abrite aujourd’hui de nombreux ateliers.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>4. Les souks</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage4} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Le souk des Fès existe depuis des centaines d’années et il semble avoir très peu évolué. C’est ce qui fait son charme d’antan, ce qui le rend si attachant. Comme Fès est une ville d’artisanat, son souk est bondé d’artisans qui rivalisent d’ingéniosité et de savoir-faire dans les souvenirs à ramener, tels de la poterie, de la céramique ou encore des bijoux. N’oubliez pas d’aller faire un tour au souk des teinturiers, dépaysement obligé !
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>5. La mosquée Karaouiyne</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage5} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Cette université, la plus ancienne du monde arabe, fut fondée en 859 de notre ère. Même si l’entrée est interdite aux non-musulsmans, elle reste aujourd’hui un haut lieu spirituel. Allez découvrir ses extérieurs et les détails qui ornent ses murs, ses 270 colonnes et ses 24 portes qui cernent une cour intérieure.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>6. Les médersas</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage6} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Une médersa est une ancienne école coranique qui fait office d’internat pour les étudiants. A Fès, elles sont nombreuses et toutes aussi prestigieuses, notamment au niveau de leurs décorations. A voir donc la médersa Attarine (photo) qui se situe face à la mosquée Karaouiyne.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>7. Les portes de la médina</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage7} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Deux grandes portes s’offrent à vous quand vous désirez rentrer à l’intérieur de la médina, c’est la porte Bab Bou Djeloud (photo) et la porte Bab Dekatène. Bab Bou Djeloud est la principale porte qui correspond à l’entrée officielle de la médina et l’autre porte, avec ses allures de château, est un lieu où étaient alors jugés les criminels durant le moyen-âge.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>8. La place Seffarine</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage8} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Sur cette place se retrouvent nombre d’artisans qui travaillent le cuivre afin de réaliser des théières, des plateaux, des brûle-parfums tandis que d’autres, des chaudronniers sont établis ici pour élaborer des marmites, des seaux et récipients divers. Un artisanat à ne pas manquer.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>9. Le palais royal</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage10} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        C’est le plus ancien palais du Maroc et sûrement le plus important. Érigé au 14e siècle, on l’appelle Dar El Makhzen. Avec ses 80 hectares, il a été construit en-dehors de l’ancienne médina, il se situe aujourd’hui près du quartier juif et du Mellah. Même si les visites ne sont pas autorisées, il faut s’y rendre pour découvrir sa gigantesque esplanade où l’on peut découvrir de grandes portes en bronze qui sont encadrées de carreaux de céramique. Les portes sont au nombre de 7 comme autant de jours dans la semaine ainsi que de niveaux dans la monarchie marocaine.
        </Text>
      
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>10. Le palais et musée Dar Batha</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage9} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        Le palais fut construit par Hassan 1er car il désirait ardemment réunir les deux villes qui composent Fès, à savoir Fès-el-Baki et Fès-el-Djedid. Ce palais fut ensuite transformé en musée de l’artisanat où vous pouvez découvrir des poteries et des céramiques du 13e siècle mais aussi des broderies, des bijoux du moyen-âge. N’oubliez pas de prendre en photos les portails richement décorés et les immenses cadenas qui ferment les portes pour la nuit.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>11. Le Stade du Complexe sportif de Fès</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage12} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        Le Stade du Complexe sportif de Fès est un stade de football d'une capacité totale de 45 000 places assises localisé dans la ville de Fès au Maroc et plus précisément sur la route reliant cette ville à Sefrou, il est d'un style architectural typiquement marocain.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>12. la ville d’Immouzar</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage13} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        La ville de Fès surplombe la plaine de "Saïss" qui s’ouvre sur les beaux massifs du Moyen Atlas ; le décor est à couper le souffle !

Pour une évasion totale, une perspective impressionnante réunissant forêts et lacs s’offre à vous et dégage une certaine sérénité et tranquillité.

En parcourant quelques kilomètres, vous vous rendez au Lac "Dayat Aoua", où vous pouvez profiter de belles randonnées à cheval ou d’un pédalo sur le lac.

La ville n’est pas si loin des forêts de la ville d’"Immouzar", où la nature s’empare du trône.
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
    height: 210,
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
    borderRadius: 90,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Fes;
