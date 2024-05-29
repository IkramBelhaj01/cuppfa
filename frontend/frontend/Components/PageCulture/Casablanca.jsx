import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window'); // Obtenez la largeur de l'écran

const backgroundImage1 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/c11.jpg');
const backgroundImage2 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/c12.jpg');
const backgroundImage3 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/c13.jpg'); // Images de fond pour Fes
const articleImage = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/c.jpg'); // Image d'article pour Fes
const articleImage1 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/c1.jpg'); 
const articleImage2 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/c2.jpg');
const articleImage3 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/c3.jpg');
const articleImage4 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/c4.jpg');
const articleImage5 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/c5.jpg');
const articleImage6 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/c6.jpg');
const articleImage7 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/c7.jpg');
const articleImage8 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/c8.jpg');
const articleImage9 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/c9.jpg');
const articleImage10 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/c10.jpg');
const articleImage11 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/kotaC.jpg');
const Casablanca = () => {
  
  const scrollViewRef = useRef();

  const scrollToMedina = () => {
    scrollViewRef.current.scrollTo({ y: 2000, animated: true }); // Position de la section Medina
  };

  const scrollToSport = () => {
    scrollViewRef.current.scrollTo({ y: 8000, animated: true }); // Position de la section Sport
  };

  const scrollToNature = () => {
    scrollViewRef.current.scrollTo({ y: 3000, animated: true }); // Position de la section Nature
  };

  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      <Swiper style={styles.wrapper} showsButtons={false} loop={false} autoplay={false} showsPagination={false}>
        <ImageBackground source={backgroundImage1} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>CASABLANCA, L'ENERGIE DE LA MODERNITE</Text>
          </View>
        </ImageBackground>
        <ImageBackground source={backgroundImage2} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>CASABLANCA, L'ENERGIE DE LA MODERNITE</Text>
          </View>
        </ImageBackground>
        <ImageBackground source={backgroundImage3} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>CASABLANCA, L'ENERGIE DE LA MODERNITE</Text>
          </View>
        </ImageBackground>
      </Swiper>
      <View style={styles.contentContainer}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>LA VILLE BLANCHE</Text>
        </View>
        <View style={styles.articleContainer}>
          <View style={styles.articleContent}>
            <View style={styles.imageContainer}>
              <Image source={articleImage} style={styles.articleImage} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.articleText}>
              Des artères bordées par des palmiers, de grands immeubles d'affaires et l'Atlantique qui ouvre sur le monde : Casablanca est le poumon économique du Maroc, une métropole bouillonnante sans cesse en éveil.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.articleContainer}>
          <View style={styles.articleContent}>
            <View style={styles.textContainer}>
              <Text style={styles.articleText}>
              Terre de l’aéroport international principal du Maroc, Casablanca est la principale porte d’entrée dans le pays pour de nombreux visiteurs. Locomotive industrielle et économique du pays, elle ne rivalise pas aux charmes exotiques de Marrakech et Fès. Il y a une touche européenne à une grande partie de son architecture, et la ville a un air moderne que l’on ne voit pas dans d’autres parties du pays.
              </Text>
            </View>
          </View>
        </View>
        
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={scrollToMedina}>
          <Text style={styles.buttonText}>Medina à Casablanca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={scrollToSport}>
          <Text style={styles.buttonText}>Sport à Casablanca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={scrollToNature}>
          <Text style={styles.buttonText}>Plage à Casablanca</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle1}>Visiter Casablanca :  la ville la plus peuplée du Maroc et du Maghreb </Text>
      </View>
      <Text style={styles.articleText1}>
      Malgré tout, vous trouverez quelques perles à visiter à Casablanca. Le quartier de la Médina est charmant et beaucoup plus petit, et plus facile à découvrir qu’ailleurs. Et la colossale mosquée Hassan II est immanquable.
      </Text>
      
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>1. La Mosquée Hassan II</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage1} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        Sur le rivage, juste au-delà de la pointe nord de la médina de Casablanca (vieille ville), la mosquée Hassan II domine toute la ville. Achevée en 1993, c’est la quatrième plus grande mosquée du monde, couvrant 9 hectares avec le plus haut minaret du monde (201 m de haut). La salle de prière peut accueillir 25 000 fidèles tandis que la cour (qui dispose d’un toit rétractable) peut en contenir 80 000 autres. Sa décoration issue de l’artisanat marocain étonnamment complexe couvre chaque centimètre de sa surface. Située au bord de la mer, son emplacement est tout à fait spectaculaire. Les non-musulmans peuvent visiter la mosquée lors de visites guidées qui débutent à l’entrée ouest de la mosquée plusieurs fois par jour.
      </Text>

      <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>2. L’ancienne médina </Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage2} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        Bien que la vieille ville de Casablanca n’ait pas autant d’ambiance et d’exotisme que la Médina de Fès ou de Marrakech, ce dédale de ruelles cache encore beaucoup de choses à découvrir. 
      </Text>

      <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>3. La place Mohammed V</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage3} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Place principale de la ville, la Place Mohammed V possède une grande fontaine (avec des lumières colorées la nuit) et est entourée de beaux exemples de l’architecture coloniale française. L’endroit n’est pas superbe en tant que tel, mais si vous y tombez dessus, vous profiterez d’un moment pour vous reposer et regarder la vie active autour de vous. Le bureau de poste principal se trouve ici, ainsi que le Palais de Justice, le consulat français et plusieurs grandes banques.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>4. La Corniche</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage4} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        La Corniche de Casablanca (front de mer) est un excellent endroit pour se promener au bord de l’eau. Une grande partie de la côte abrite à présent des hôtels et des restaurants de luxe. C’est là que les locaux se rendent pour se détendre et s’amuser. Un peu à l’écart du centre ville, vous pourrez vous baigner dans les piscines de clubs de plage et prendre un transat, ou tout simplement profiter de la brise marine. Le soir, la vie nocturne y est animée.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>5. L’Église du Sacré-Cœur</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage5} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Cette église élégante a été construite dans les années 1930 et son architecture est un mélange harmonieux de gothique et art-déco. Elle a malheureusement été laissée sans restauration au cours des dernières décennies, mais même dans son état ​​de délabrement actuel, la structure est toujours aussi belle. Non loin, vous pouvez voir la cathédrale Notre-Dame-de-Lourdes, construite 24 ans plus tard. N’hésitez pas à visiter le vaste jardin et parc public de la Ligue Arabe.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>6. Les bâtiments art-déco</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage6} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        A un certain moment de l’histoire, le Maroc (ou sa quasi totalité) était une colonie française. Par conséquent, Casablanca a conservé un patrimoine architectural de l’époque coloniale des années 30. Les bâtiments Art déco dominent le centre de la ville et une promenade est recommandée pour apprécier la beauté de certains bâtiments. Commencez par la Place des Nations Unies et marchez en direction du boulevard Mohammed V.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>7. Le quartier des Habous (nouvelle médina)</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage7} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Voici une autre facette de la ville blanche à découvrir. C’est un quartier construit par les Français entre 1918 et 1955 pour créer une nouvelle Médina. Il ressemble aux vieilles villes marocaines traditionnelles avec quelques choses en plus : de plus grandes rues et des installations modernes. En outre, il abrite différents marchés traditionnels ainsi que le Palais Royal qui vaut la peine d’être vu tout en se promenant.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>8. Visitez un hammam</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage8} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Vous devez essayer un bain de vapeur et de gommage dans un hammam traditionnel lorsque vous visitez le Maroc, alors pourquoi pas à Casablanca ? Essayez celui de Solidarité Féminine ou Les Bains Ziani.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>9. Le Marché Central</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage9} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Le marché central animé de Casablanca est indispensable si vous voulez vous immiscer au cœur de la vie de la ville. En plein centre-ville, c’est là que les habitants viennent acheter et vendre de tout, y compris les babouches marocaines. C’est une excellente occasion pour les photographes et très amusant pour tout le monde.
        </Text>
      
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>10. A l’écart de Casa : Mohammédia</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage10} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Cette ville balnéaire endormie offre quelques belles plages, et est une alternative relaxante à un séjour à Casablanca. Bien qu’abritant le second plus grand port du Maroc, Mohammédia et ses charmes tranquilles n’ont pas été touchés par l’industrie. 
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>11. Complexe Mohammed V à Casablanca</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage11} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Peut-être l'un des stades les plus historiques du Maroc, le Complexe Mohammed V, d'une capacité de 45 000 places, a été le témoin de nombreux événements footballistiques majeurs. Dernièrement, il a notamment accueilli des matchs lors de la CAN féminine en 2022, prouvant encore une fois sa capacité à gérer des tournois d'envergure.
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
    borderRadius: 90,
    paddingVertical: 13,
    paddingHorizontal: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Casablanca;
