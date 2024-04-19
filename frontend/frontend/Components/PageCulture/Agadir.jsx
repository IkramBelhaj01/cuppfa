import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window'); // Obtenez la largeur de l'écran

const backgroundImage1 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/aga2.jpg');
const backgroundImage2 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/aga3.jpg');
const backgroundImage3 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/aga1.jpg'); // Images de fond pour Fes
const articleImage = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g.jpg'); // Image d'article pour Fes
const articleImage1 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g1.jpg'); 
const articleImage2 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g2.jpg');
const articleImage3 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g3.jpg');
const articleImage4 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g4.jpg');
const articleImage5 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g5.jpg');
const articleImage6 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g6.jpg');
const articleImage7 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g7.jpg');
const articleImage8 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g8.png');
const articleImage9 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g9.png');
const articleImage10 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g10.jpg');
const articleImage11 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g11.jpg');
const articleImage12 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g12.jpg');
const articleImage13 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g13.jpg');
const articleImage14 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g17.jpg');
const articleImage15 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/g15.jpg');
const articleImage16 = require('C:/Users/admin/Desktop/cuppfa/frontend/frontend/assets/koraagadir.png');
const Agadir = () => {
  const scrollViewRef = useRef();

  const scrollToMedina = () => {
    scrollViewRef.current.scrollTo({ y: 5800, animated: true }); // Position de la section Medina
  };

  const scrollToSport = () => {
    scrollViewRef.current.scrollTo({ y: 10000, animated: true }); // Position de la section Sport
  };

  const scrollToNature = () => {
    scrollViewRef.current.scrollTo({ y: 8100, animated: true }); // Position de la section Nature
  };

  return (
    <ScrollView style={styles.container} ref={scrollViewRef}>
      <Swiper style={styles.wrapper} showsButtons={false} loop={false} autoplay={false} showsPagination={false}>
        <ImageBackground source={backgroundImage1} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>AGADIR ,LE SOLEIL ET LA PLAGE</Text>
          </View>
        </ImageBackground>
        <ImageBackground source={backgroundImage2} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>AGADIR ,LE SOLEIL ET LA PLAGE</Text>
          </View>
        </ImageBackground>
        <ImageBackground source={backgroundImage3} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.title}>AGADIR ,LE SOLEIL ET LA PLAGE</Text>
          </View>
        </ImageBackground>
      </Swiper>
      <View style={styles.contentContainer}>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>AGADIR , UNE DESTINATION ACTIVE</Text>
        </View>
        <View style={styles.articleContainer}>
          <View style={styles.articleContent}>
            <View style={styles.imageContainer}>
              <Image source={articleImage} style={styles.articleImage} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.articleText}>
              Si vous êtes à la recherche de vacances fabuleuses sous le soleil marocain, partez visiter Agadir.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.articleContainer}>
          <View style={styles.articleContent}>
            <View style={styles.textContainer}>
              <Text style={styles.articleText}>
              Située dans le Sud du Maroc, cette grande station balnéaire au climat doux est de 
              plus en plus prisée par tous ceux en quête de souvenirs inoubliables en couple, en 
              famille ou entre amis. Ancienne ville d’agriculture et de pêche, elle a été entièrement 
              reconstruite après le séisme dévastateur en 1960. Agadir est devenue aujourd’hui le symbole 
              de la modernité au Maroc. Pôle économique important du pays, elle est également sa deuxième 
              ville touristique. Son soleil généreux, ses paysages splendides et variés, son ambiance chaleureuse
               et la large palette d’activités que cette ville propose vous promettent de vacances bien remplies !
              </Text>
            </View>
          </View>
        </View>
        
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={scrollToMedina}>
          <Text style={styles.buttonText}>Medina à Agadir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={scrollToSport}>
          <Text style={styles.buttonText}>Sport à Agadir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={scrollToNature}>
          <Text style={styles.buttonText}>Nature à Agadir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle1}>Visiter Agadir : les 15 choses incontournables à faire</Text>
      </View>
      <Text style={styles.articleText1}>
      À l'ouest du pays, bordée par les vagues de l'Atlantique, Agadir est une des perles du Maroc. Quelle que soit la saison, le soleil y déverse ses rayons et la ville profite d'un climat agréable que les
       alizés adoucissent encore. Surtout, son front de mer, long de 10 kilomètres, offre aux touristes de magnifiques perspectives sur le bleu de l'océan ainsi que l'occasion de s'adonner au farniente dans les meilleures conditions.
      </Text>
      
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>1.La vallée du paradis</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage1} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        Également appelée la vallée verte, cet écrin de verdure est un véritable havre de paix. C’est l’endroit idéal pour les amoureux de la nature et tous ceux qui veulent sortir un peu de la ville et changer de la plage. Pour en profiter pleinement, vous pouvez opter pour une excursion à la journée proposée par les plateformes d’activités.
      </Text>

      <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>2. safari en quad </Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage2} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        Si vous souhaitez découvrir les environs d’Agadir, un safari en quad dans les zones rurales berbères est une expérience à vivre. Entre adrénaline et découvertes, cette sortie mêle sport et paysages somptueux. Embarquez pour une balade au cours de laquelle vous sillonnerez des dunes pré-sahariennes, passerez près d’arganiers et grimperez dans les montagnes pour vous offrir une vue panoramique.
      </Text>

      <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>3. Téléphérique d’Agadir</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage3} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Embarquez dans le seul téléphérique du Maroc pour une balade d’une heure et demie, avec des vues à 360 degrés. Longez le port, découvrez les quartiers historiques et contemplez la magnifique baie d’Agadir avec la lumière particulière du ciel se reflétant sur l’océan. Une expérience à la fois riche en émotions et en découvertes, pour un privilège rare pour les yeux.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>4. Surfer la vague à Tamraght</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage4} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Si vous venez visiter Agadir avec l’envie de faire des activités en pleine nature, le surf doit absolument être votre priorité. Avec ses plages magnifiques, Agadir est prisée des surfeurs, offrant des vagues adaptées à tous les niveaux. Tamraght et Aourir sont parmi les spots favoris aux alentours d’Agadir, parfaits pour ceux qui débutent en surf. Pour des vagues plus douces, optez pour « banana beach ». Vous pouvez y accéder en voiture, taxi, ou grâce à la navette « Souk to Surf ». Cette dernière, économique et pratique, relie Agadir à Tamraght quotidiennement.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>5. Le Souk el Had</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage5} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Si vous partez visiter Agadir, passer un moment au Souk est incontournable. Le cachet moderne du Souk el Had le différencie un peu des autres souks marocains, mais n’en reste pas moins authentique ! Ce trésor au coeur de la ville regroupe plus de 3000 commerces sur une superficie de 11 hectares. Vous découvrirez ici un univers authentique, vivant, tout en couleurs, où la senteur des épices envoûtera vos sens. Indéniablement l’un des endroits les plus agréables et les plus animés d’Agadir !
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>6. Les musées de la ville</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage6} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Parce visiter Agadir est aussi synonyme de découvertes culturelles, vous prendrez plaisir à arpenter les plus beaux musées de la ville. Spécialisé dans l’art du sud du Maroc, le Musée Municipal Bert Flint, également appelé Musée Tiskiwin, vous dévoilera une sublime collection d’objets traditionnels marocains venant de la région saharienne et de la vallée du Sousse. Le Musée de la Mémoire conserve l’histoire du terrible séisme qui a ravagé la cité le 29 février 1960, le tout situé dans une ravissante oasis de verdure qui laisse rappeler les jardins de l’Alhambra à Grenade. Le Musée du Patrimoine Amazigh, quant à lui, vous séduira par ses somptueuses collections de bijoux, talismans, tapis, porteries et autres objets relatifs à la vie des Berbères.
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>7. La Kasbah</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage7} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        C’est ici que se trouvait la ville d’Agadir avant le terrible tremblement de terre. La Kasbah était une forteresse, construite en 1540, pour protéger la ville des assauts des Portugais. Les ruines de ses remparts et son entrée sont les seuls restes du patrimoine architectural d’Agadir.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>8. La Vallée des Oiseaux</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage8} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Domicile de plusieurs espèces d’oiseaux méconnus comme les nandous ou les demoiselles numide, ce parc animalier qui débouche sur le front de mer vous plongera dans un superbe décor exotique, au milieu des bananiers, des magnolias et des bougainvilliers. Durant votre visite, en plus de nombreux oiseaux, vous pourrez apercevoir d’autres représentants de la faune locale, comme le singe magot ou le mouflon à manchette. Idéal pour une pause nature lors de votre visite à Agadir.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>9. La Médina Polizzi</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage9} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Si vous vous demandez que faire à Agadir, sachez qu’un passage à la médina, la vieille ville, s’impose. L’expérience est unique puisque la médina de la ville est récente, mais elle recrée fidèlement toutes les caractéristiques des médinas marocaines, des ruelles sinueuses aux souks effervescentes. C’est ici que vous trouverez le souk El Had. Cette médina est le fruit de l’imagination de l’artiste italien Coco Polizzi. SI vous souhaitez faire le plein de souvenirs, c’est le lieu idéal !
        </Text>
      
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>10. Le jardin portugais et Crocoparc</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage10} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Le jardin portugais, nommé également jardin d’Olhao, est un joli coin de verdure qui commémore à l’origine les liens entre le Maroc et le Portugal, à travers le jumelage d’Agadir avec la ville d’Olhao. C’est ici que vous trouverez le Musée de la Mémoire dont nous vous parlions un peu plus haut. Vous apprécierez sans aucun doute cet espace vert propice à la détente.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>11.Les plages d’Agadir</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage11} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Considérée comme l’une des plus belles d’Afrique du Nord, avec plus de six kilomètres de sable fin, la baie d’Agadir est idéale pour profiter du soleil et des palmiers. Que vous préfériez les coins touristiques qui proposent diverses activités nautiques comme des sessions de jet ski ou des cours de planche à voile, ou les étendues plus sauvages, vous aurez l’embarras du choix ! Et pour les fans de surf, direction Taghazoute !
        </Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>12.Le désert de Massa</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage12} style={styles.articleImage1} />
        </View>
        <Text style={styles.articleText1}>
        Véritable bijou de la nature situé dans la région de Massa à 60km d’Agadir, le désert de Massa offre un spectacle époustouflant. Là-bas, faune et flore majestueuses se lovent dans cette réserve naturelle de… 33 800 hectares ! Du parc national Souss Massa, au barrage d’eau Youssef Ben Tachfine jusqu’aux jusqu’aux dunes du dénommé « Petit Sahara » : la région vous promet une expérience immersive. Pour en profiter pleinement, optez pour les visites à la journée qui vous permettront d’apprécier l’excursion en bonne et due forme.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>13.Taroudant et l’oasis de Tiout</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage13} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Surnommée « La petite Marrakech », Taroudant préserve en son sein un patrimoine qu’il serait dommage de ne pas découvrir lors de votre séjour à Agadir. L’excursion d’une journée vaut le détour et pour cause… Entourée par de majestueux remparts, Taroudant renferme de multiples trésors. Entre palmiers et oliviers, laissez-vous charmer par son architecture et ses petites ruelles qui vous mèneront de sa casbah à l’incontournable de la Médina : les souks ! Florissants, ils illustrent la vraie dynamique de la ville. Un charme à la berbère connoté de tissu, de cuir, d’argent et de cuivre que l’on retrouve en majorité sur les étals.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>14.Un hammam et un massage</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage14} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Profitez d’un moment de bien-être seul ou en couple lors de votre séjour à Agadir : accordez-vous une pause ressourçante en explorant les bienfaits du hammam et des massages. Les hammams traditionnels marocains sont réputés pour leurs vertus purifiantes et relaxantes. Offrez-vous un gommage corporel au savon noir et un massage à base de l’huile d’argan dans un cadre enchanteur.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>15.Une balade en bateau</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage15} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Vous avez exploré les plages d’Agadir et vous êtes désormais en quête d’une autre aventure ? Optez pour la balade en bateau ! En effet, en louant un bateau à Agadir, vous vous offrez l’assurance d’une journée tranquille sur le littoral marocain.
        </Text>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle2}>16.Grand Stade d'Agadir</Text>
        </View>
        <View style={styles.imageContainer}>
              <Image source={articleImage16} style={styles.articleImage1} />
      </View>
        <Text style={styles.articleText1}>
        Grand Stade d'Agadir est un stade de football situé à Agadir, Maroc. Inauguré le 11 octobre 2013, il est la propriété du Ministère de la Jeunesse et des Sports marocain, et géré par la SONARGES (Société Nationale de Réalisation et de Gestion des Stades). Le stade accueille l'ensemble des matchs du club résident, le Hassania Agadir.
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
    height: 170,
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
    paddingHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Agadir;
