import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window'); // Obtenez la largeur de l'écran

const backgroundImage1 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/tanger1.jpg');
const backgroundImage2 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/Tanger.jpg');
const backgroundImage3 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/tanger2.jpg'); // Images de fond pour Fes
const articleImage = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/11.jpg'); // Image d'article pour Fes
const articleImage1 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/soco.jpg'); 
const articleImage2 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/2.jpg');
const articleImage3 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/3.jpg');
const articleImage4 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/4.jpg');
const articleImage5 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/5.jpg');
const articleImage6 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/beach.jpg');
const articleImage7 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/7.jpg');
const articleImage8 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/hafa.jpg');
const articleImage9 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/koraT.jpg');

const Tanger = () => {
  const scrollViewRef = useRef();

  const scrollToMedina = () => {
    scrollViewRef.current.scrollTo({ y: 2600, animated: true }); // Position de la section Medina
  };

  const scrollToSport = () => {
    scrollViewRef.current.scrollTo({ y: 8000, animated: true }); // Position de la section Sport
  };

  const scrollToNature = () => {
    scrollViewRef.current.scrollTo({ y: 4600, animated: true }); // Position de la section Nature
  };


  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      <Swiper style={styles.wrapper} showsButtons={false} loop={false} autoplay={false} showsPagination={false}>
        <ImageBackground source={backgroundImage1} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>TANGER, UNE VILLE COSMOPOLITE !</Text>
          </View>
        </ImageBackground>
        <ImageBackground source={backgroundImage2} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>TANGER, UNE VILLE COSMOPOLITE !</Text>
          </View>
        </ImageBackground>
        <ImageBackground source={backgroundImage3} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>TANGER, UNE VILLE COSMOPOLITE !</Text>
          </View>
        </ImageBackground>
      </Swiper>
      <View style={styles.contentContainer}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>TANGER,LE COEUR BATTANT DU MAROC</Text>
        </View>
        <View style={styles.articleContainer}>
          <View style={styles.articleContent}>
            <View style={styles.imageContainer}>
              <Image source={articleImage} style={styles.articleImage} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.articleText}>
              Avec ses ruelles tortueuses, sa médina au sommet d'une colline et ses plages voisines, situées face à une riche tapisserie culturelle, Tanger, au Maroc, aux romantiques et aux historiens. 
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.articleContainer}>
          <View style={styles.articleContent}>
            <View style={styles.textContainer}>
              <Text style={styles.articleText}>
              Célèbre pour être une ville qui a inspiré de grands artistes tels que Delacroix, Paul Bowles ou Matisse, Tanger est un port marocain situé dans le détroit de Gibraltar d’une grande beauté, qui a eu au cours de l’histoire une grande importance stratégique entre l’Afrique et l’Europe.
                Très proche de l’Espagne, Tanger est une ville dont vous tomberez amoureux dès que vous y mettrez les pieds, que vous pourrez visiter en trois ou quatre jours et qui possède une grande offre touristique, culturelle et gastronomique.
              </Text>
            </View>
          </View>
        </View>
        
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={scrollToMedina}>
          <Text style={styles.buttonText}>Medina à Tanger</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={scrollToSport}>
          <Text style={styles.buttonText}>Sport à Tanger</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={scrollToNature}>
          <Text style={styles.buttonText}>Nature à Tanger</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle1}>Visiter Tanger : les 8 choses incontournables à faire</Text>
      </View>
      <Text style={styles.articleText1}>
      Tanger une ville très vivante, située à l’entrée du détroit de Gibraltar. Sa situation géographique a fait d’elle un grand port international. C’est un point stratégique entre l’Afrique et l’Europe depuis le XIIème siècle…avant notre ère, c’est-à-dire, à l’époque des Phéniciens (-1200 à -300 avant J.-C. environ). La ville occupe actuellement un bon tiers de la péninsule formant, du côté marocain, le détroit de Gibraltar. Au fil des siècles, Tanger s’est étendue, elle s’est agrandie.
      </Text>
      
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>1. Le Grand Socco</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage1} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        Qui dit visiter Tanger, dit visiter son centre. Le Grand Socco est indéniablement l’une des parties de Tanger les plus animées. En réalité, il s’agit du principal accès à la médina et au marché de fruits et légumes frais. Bordée de palmiers, cette grande place est très appréciée par les locaux qui viennent facilement se reposer près de la fontaine.
      </Text>

      <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>2. Le Cap Spartel</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage2} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        Il est impensable de faire Tanger sans aller au Cap Spartel, qui correspond à peu de choses près à notre 
        Finistère, en Bretagne. Il s’agit de la pointe ouest de la péninsule sur laquelle se trouve Tanger. Vous y
         découvrirez un phare, qui semble surveiller l’Océan Atlantique et la Mer Méditerranée. Il est dit que c’est 
         à ses pieds que les deux se rencontrent.

        Ce phare, inauguré en 1864, fut le premier du Maroc. Vous le retrouverez dans beaucoup de représentations 
        (souvenirs touristiques notamment). Et pour cause, il s’agit de l’une des icônes de la ville de Tanger. 
        Le Cap Spartel est situé à une quinzaine de kilomètres de la ville, accessible en taxi pour une quinzaine d’euros (150 dirhams).
      </Text>

      <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>3. La médina de Tanger</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage3} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Qui n’a jamais rêvé d’entrer dans une médina et de se laisser guider par ses ruelles jusqu’à en perdre le nord ? C’est un moyen extraordinaire de visiter Tanger : l’explorer et apprendre à la connaître. Les ruelles étroites, mais habitées, vous en feront voir de toutes les couleurs : bleu, rose, jaune, vert… La médina possède une architecture et un style qui lui est propre. Les habitants aiment les plantes et ça se voit. Certains poussent leur décoration au maximum, pour notre plus grand plaisir. Mais la médina, ce n’est pas que des habitations, il y a aussi beaucoup de boutiques, à touristes ou alimentaires.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>4. La gastronomie locale</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage4} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Pour une pause gourmande et typique,  nous ne pouvons que vous conseiller les pâtisseries marocaines. Au chocolat, au miel, à la cannelle ou à la fleur d’oranger, elles prennent différentes formes. Aussi délicieuses que célèbres, les pâtisseries marocaines sont une réelle institution à Tanger, il y a des boutiques partout !
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>5. La Grotte d’Hercule</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage5} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Probablement l’équivalent de notre Tour Eiffel, les Grottes d’Hercule sont l’un des principaux emblème de la ville de Tanger. Pour y accéder, il faudra prendre l’option taxi ou stop, car elles se situent à environ 15km du centre-ville. Cependant, le jeu en vaut la chandelle.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>6. La plage municipale</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage6} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Comment faire Tanger sans aller à la plage municipale, somme toute très fréquentée. Elle est aussi très grande. C’est une très belle plage, de sable fin et blanc. Si vous la parcourez dans sa largeur, vous passerez non loin des Jardins de la Corniche, un espace vert avec jeux.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>7. Le Parc Perdicaris</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage7} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Sur la route qui mène au Cap Spartel depuis Tanger, se trouve une parenthèse de verdure : le Parc Perdicaris. Face au détroit, ce parc s’étend sur 67 hectares. Des parcours balisés vous permettront de découvrir tranquillement cet espace préservé. C’est un véritable jardin botanique, riche d’une flore et d’une faune variées. La forêt du parc abritent de nombreuses espèces d’arbres, comme des acacias, des lauriers, et des pins locaux.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>8. Le thé dans un grand Café</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage8} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Évidemment, il n’est pas de Maroc sans l’emblématique thé à la menthe ! Et ça, les tangérois le savent. Le thé est là-bas une réelle institution, comme dans la majeure partie des pays arabes. Et ce, pour notre plus grand bonheur.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>9. Le stade Ibn Batouta</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage9} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Il porte le nom d'Ibn Battouta, un célèbre voyageur du xive siècle; le stade a coûté 844 millions de dirhams, soit 80 millions d'euros. Le stade est loué par le club IR Tanger et soutenu par l’État.
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
    height: 330,
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

export default Tanger;
