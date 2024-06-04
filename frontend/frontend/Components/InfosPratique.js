import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, Button,ImageBackground } from 'react-native';

const InfosPratique = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');

  const handleSectionPress = (section) => {
    setSelectedSection(section);
    setModalVisible(true);
  };
  
  return (
    <ImageBackground 
      source={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/AcceuilPage/photos/stock.jpg')} // Mettez à jour le chemin vers votre image
      style={styles.backgroundImage}
      resizeMode="cover" // ou 'stretch'
    >
    <View style={styles.container}>
     
      <TouchableOpacity style={styles.section} onPress={() => handleSectionPress('Climats et saisons')}>
         
        <Text style={styles.sectionText}>Climats et saisons</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={() => handleSectionPress('Formalités')}>
        <Text style={styles.sectionText}>Formalités</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={() => handleSectionPress('Santé et bien-être')}>
        <Text style={styles.sectionText}>Santé et bien-être</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={() => handleSectionPress('Langue et vocabulaire essentiel')}>
        <Text style={styles.sectionText}>Langue et vocabulaire essentiel</Text>
        
      </TouchableOpacity>
     
     

     
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedSection}</Text>
            <ScrollView style={styles.modalScrollView}>
              {/* Ajoutez les informations pour chaque section ici */}
              {selectedSection === 'Climats et saisons' && (
                <Text style={styles.modalText}>
                Le Maroc est une terre de contraste . Baigné au nord par les eaux de la Méditerranée, 
                à l'ouest par celles de l'océan Atlantique, il est aussi sillonné par les montagnes 
                du Rif et de l'Atlas et est soumis à toutes sortes d'influences climatiques.
                {'\n\n'} 

                Dans les régions côtières, le soleil est omniprésent. Tout au long de l'année, 
                les rayons de soleil vous invitent à profiter de votre séjour, 
                quelque soit la saison. Ainsi, Agadir, qui située sur les bords de l'océan Atlantique et considérée comme principale station balnéaire du pays, 
                propose aux amateurs de farniente 300 jours d'ensoleillement annuel, des températures douces et de légers alizés. N'oubliez pas de visiter aussi Taghazout, Mogador et Magazan: ces villes valent également le détour.
                {'\n\n'}

                Un peu plus vers le centre, le climat abandonne la douceur méditerranéenne et se fait continental. 
                Les reliefs y sont bien dessinés et présentent de somptueux panoramas. C'est le pays des grands espaces, 
                celui des baroudeurs qui peuvent s'y livrer à des trecks et à des randonnées en toute saison.
                {'\n\n'}

                Au sud, le pays ouvre sur les immensités du Sahara. 
                Le printemps et l'automne sont les meilleures saisons pour s'y aventurer. 
                Au milieu des sables brunes, le soleil resplendit et se reflète sur les dunes. 
                Ces étendues désertiques dégagent un sentiment d'irréalité. Faites l'expérience d'une balade sur le dos d'un chameau et engagez-vous dans un des plus beaux tableaux jamais composés par la nature!
                </Text>
              )}
              {selectedSection === 'Formalités' && (
                
                <Text style={styles.modalText}>
                  -----------------------------------------------
                  {'\n\n'}
                  Ai-je besoin d’un visa pour entrer au Maroc ? Quelles sont les exigences en matière de passeport ? Obtenez quelques informations indispensables pour voyager plus facilement.
                  {'\n\n'}
                  <Text style={styles.subTitle2}>Visa et passeport</Text>
                  {'\n\n'}
                  La nécessité d’un visa dépend de votre nationalité. Il est possible de déposer et suivre les demandes d'E-Visa ou d’AEVM (Autorisations Electroniques de Voyage au Maroc) à travers le portail Acces Maroc.
                  {'\n\n'}
                  Pour toutes les nationalités, la durée maximale du voyage touristique est de 90 jours. Une demande de prolongation se fait auprès du poste de police le plus proche pour rester 90 jours supplémentaires.
                  {'\n\n'}
                  Pour les ressortissants étrangers qui arrivent au Maroc dans le cadre d’un voyage organisé, le passeport en cours de validité doit couvrir au moins la durée du séjour au Maroc.
                  {'\n\n'}
                  Pour éviter tout désagrément lors de votre arrivée au Maroc, vérifiez bien que vous avez en votre possession un passeport en cours de validité.
                  {'\n\n'}
                  <Text style={styles.subTitle2}>Moyens de paiement</Text>
                  {'\n\n'}
                  <Text style={styles.subTitle}>Le change : </Text>
                  Au sein des aéroports, dans certains hôtels, dans les banques, dans les villes des bureaux de change sont disponibles pour vous faciliter l'accessibilité. Les guichets exigeront votre passeport pour la transaction.
                  {'\n\n'}
                  <Text style={[styles.subTitle,{ color: 'bordeaux' }]}>Carte bancaire internationale: </Text>
                  Votre banque vous renseignera sur les endroits où vous pouvez retirer votre argent. Les guichets bancaires GAB sont répandus dans tout le Maroc. Les cartes de crédits internationales Visa ou MasterCards sont acceptées par la plupart des hôtels, dans certains restaurants, magasins et stations-service.
                </Text>
              )}
              {selectedSection === 'Santé et bien-être' && (
               
                <Text style={styles.modalText}>
                
                  {'\n\n'}
                  A part les vaccinations universelles (tétanos, polio, coqueluche, diphtérie, hépatite B) 
                  <Text style={{ fontWeight: 'bold' }}>aucune vaccination n’est exigée pour visiter le Maroc</Text> .
                  
                  
                   
                  Certains vaccins sont néanmoins utiles pour la protection individuelle du voyageur. En cas de séjours ruraux prolongés,
                   il est fortement recommandé de se faire vacciner préventivement contre 
                   <Text style={{ fontWeight: 'bold' }}> la rage</Text>
                   .
                 
                  {'\n\n'}
                  Pour éviter toute intoxication ou maladie, il est recommandé de :
                  {'\n\n'}
                  <Text style={styles.modalText}></Text>
                  <Text style={{ fontWeight: 'bold' }}> • </Text>
                  Se laver les mains avant les repas {"\n"}
                  <Text style={{ fontWeight: 'bold' }}> • </Text>
                  Laver et peler les fruits et les légumes {"\n"}
                  <Text style={{ fontWeight: 'bold' }}> • </Text>
                  Consommer de la viande bien cuite {"\n"}
                  <Text style={{ fontWeight: 'bold' }}> • </Text>
                 Eviter l’exposition trop longue au soleil
                  

                  {'\n\n'}
                  En cas de diarrhée contenant des glaires, du pus, du sang ou accompagnée d’une fièvre, il est fortement recommandé de consulter un médecin. Pour de simples selles molles, vous pouvez utiliser un antibiotique ralentissant le transit intestinal.
                   Les pharmacies marocaines sont souvent correctement approvisionnées et les médecins, bien formés.
                  {'\n\n'}
                  En cas d’urgence médical, prière d’
                  <Text style={{ fontWeight: 'bold' }}>appeler le numéro national unique et gratuit « 141 »</Text>
                 .
                  {'\n\n'}
                  Cependant, le Maroc dispose de tous les atouts pour devenir
                  <Text style={{ fontWeight: 'bold' }}> une destination privilégiée pour le tourisme médical</Text>
                  . 
                   Le corps des médecins est doté d'un savoir-faire médical reconnu au niveau international, pratiquant des tarifs de soins très compétitifs 
                  qui peuvent atteindre jusqu'à 50 % par rapport aux autres pays.
                  {'\n\n'}
                  La première "ville médicale" du Maroc, baptisée
                  <Text style={{ fontWeight: 'bold' }}>   Marrakech Healthcare City</Text>
                 
                   , a été inaugurée en décembre 2016.
                  {'\n\n'}
                  Ce complexe médico-hôtelier comporte, en plus d'une clinique, un hôtel 5 étoiles de 40 chambres et un village de 56 appartements avec piscines et jardins privés.
                  {'\n\n'}
                  Marrakech Healthcare City couvre plusieurs spécialités comme l'ophtalmologie, la neurochirurgie, l'orthopédie, la génétique et la chirurgie maxillo-faciale, et dispose aussi d’un centre de beauté, 
                  un spa, une balnéothérapie et un hammam pour compléter l'offre.
                </Text>
               
              )}
              {selectedSection === 'Langue et vocabulaire essentiel' && (
  <View>
  <Text style={styles.modalText}>
  {'\n\n'}
<Text  style={{ fontWeight: 'bold' }} >_____________________________________</Text> 
{'\n\n'}
  Découvrir un pays, c'est aussi découvrir sa langue.{'\n\n'}
  Le Maroc dispose
  <Text style={{ fontWeight: 'bold' }}> de deux langues officielles, qui sont l'arabe et l'amazighe,</Text>
   
   mais le français est aussi parlé et compris par la quasi-totalité des Marocains.{'\n\n'}
  L'espagnol est répandu dans les régions du Nord et du Sud du Maroc.{'\n\n'}
  La langue amazighe, dont l'alphabet est 
  <Text style={{ fontWeight: 'bold' }}> le Tifinagh</Text>
  
  , est le patrimoine commun de tous les Marocains.{'\n\n'}
  L’arabe classique ou littéraire est utilisé dans le milieu administratif.
  <Text style={{ fontWeight: 'bold' }}>La langue utilisée oralement par les Marocains est la Darija</Text>
    
  (dialecte marocain). C’est d’un mélange de l’arabe, l’amazighe, le français et l’espagnol.{'\n\n'}
  Pour vous mêler aux populations locales et profiter pleinement de votre séjour, ce sont certains mots en Darija qu'il vous faut maîtriser. Cela vous permettra de sortir du lot de touristes classiques et de montrer que vous faites des efforts dans le pays.{'\n\n'}
  Voici quelques expressions et mots qui vont vous aider tout au long de votre séjour au Maroc :
</Text>


  <Text style={{ fontWeight: 'bold', fontSize: 24, fontStyle: 'italic',marginTop: 10, marginBottom: 10 }}>  Mots courants</Text>
  
 
    <View style={styles.tableRow}>
      <Text style={styles.tableHeader}>Français</Text>
      <Text style={styles.tableHeader}>Darija</Text>
    </View>
    <View style={styles.tableRow}>
      <Text>Bonjour / Bonsoir</Text>
      <Text>Salam / Msa Lkheir</Text>
    </View>
    <View style={styles.tableRow}>
      <Text>Comment allez-vous ?</Text>
      <Text>Kidayr, Labas ?</Text>
    </View>
    <View style={styles.tableRow}>
      <Text>Très bien, merci, et toi ?</Text>
      <Text> Labas hamdollah, o nta ?</Text>
    </View>
    <View style={styles.tableRow}>
      <Text>Pardon</Text>
      <Text>Smahli</Text>
    </View>
    <View style={styles.tableRow}>
      <Text>Bienvenu</Text>
      <Text>Marhba</Text>
    </View>
    <View style={styles.tableRow}>
      <Text>Au revoir</Text>
      <Text>Beslama</Text>
    </View>
    <View style={styles.tableRow}>
      <Text>Merci (Beaucoup)</Text>
      <Text>	Chokran (bezzaf)</Text>
    </View>
	  <View style={styles.tableRow}>
      <Text>Oui / Non	</Text>
      <Text>	ah / La</Text>
    </View>
    <View style={styles.tableRow}>
      <Text>Comment t'appelles-tu ?	</Text>
      <Text>		Chno Smitek</Text>
    </View>
    <Text style={{ fontWeight: 'bold', fontSize: 24, fontStyle: 'italic',marginTop: 10, marginBottom: 10 }}>Commerce</Text>
  
                             
    <View style={styles.tableRow}>
      <Text style={styles.tableHeader}>Français</Text>
      <Text style={styles.tableHeader}>Darija</Text>
    </View>
    <View style={styles.tableRow}>
      <Text> C'est combien ?</Text>
      <Text> 	Bch'hal afak?</Text>
    </View>
    <View style={styles.tableRow}>
      <Text>C'est un bon marché</Text>
      <Text>  Tamane mezyane</Text>
    </View>
    <View style={styles.tableRow}>
      <Text>Ce n'est pas cher!</Text>
      <Text>	R'khiss</Text>
    </View>
    <View style={styles.tableRow}>
      <Text>C'est trop cher!</Text>
      <Text>Ghali bezaf</Text>
    </View>
    <View style={styles.tableRow}>
      <Text>Pouvez-vous baisser le prix?</Text>
      <Text>Nkass tamane Afak </Text>
    </View>
    <View style={styles.tableRow}>
      <Text>J'aime / je n'aime pas	</Text>
      <Text>	Aâjabni / Maâjabnich</Text>
    </View>
    <Text style={{ fontWeight: 'bold', fontSize: 24, fontStyle: 'italic',marginTop: 10, marginBottom: 10 }}>Directions</Text>

    <View style={styles.tableRow}>
      <Text style={styles.tableHeader}>Français</Text>
      <Text style={styles.tableHeader}>Darija</Text>
    </View>
	  
    
    <View style={styles.tableRow}>
      <Text style={styles.column}>Où est ...? </Text>
      <Text style={styles.column}>Fin kayn ...? </Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Comment aller à...?</Text>
      <Text style={styles.column}>Kifach namchi li ...?</Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Banque</Text>
      <Text style={styles.column}>Banka</Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Gare</Text>
      <Text style={styles.column}>Mahatta</Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Centre-ville</Text>
      <Text style={styles.column}>Ouasst lamdina</Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Hôpital</Text>
      <Text style={styles.column}>Sbitar</Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Tout droit</Text>
      <Text style={styles.column}>Nichane</Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Gauche / Droite</Text>
      <Text style={styles.column}>Lissar / Limane</Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Nord / Sud </Text>
      <Text style={styles.column}>Chamal / Janoub </Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}> Est / Ouest</Text>
      <Text style={styles.column}> Charq / Gharb</Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Route</Text>
      <Text style={styles.column}>Triq</Text>
    </View>
    <Text style={{ fontWeight: 'bold', fontSize: 24,fontStyle: 'italic', marginTop: 10, marginBottom: 10 }}> Horaires / dates et jours</Text>
  
    <View style={styles.tableRow}>
      <Text style={styles.tableHeader}>Français</Text>
      <Text style={styles.tableHeader}>Darija</Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Quelle heure est-il?</Text>
      <Text style={styles.column}>Ch'hal f saâa</Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Quand?</Text>
      <Text style={styles.column}>Fouqach?</Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Hier / Aujourd'hui / Demain</Text>
      <Text style={styles.column}>Lbareh / Lyoum / ghedda</Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Lundi / Mardi</Text>
      <Text style={styles.column}>Tnine / Tlat </Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Mercredi / Jeudi</Text>
      <Text style={styles.column}> Larbaâ / Khmiss</Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}>Vendredi / Samedi </Text>
      <Text style={styles.column}>Joumouâ / Sabt </Text>
    </View>
    <View style={styles.tableRow}>
      <Text style={styles.column}> Dimanche</Text>
      <Text style={styles.column}> al Had</Text>
    </View>
    <Text style={{ fontWeight: 'bold', fontSize: 24, fontStyle: 'italic',marginTop: 10, marginBottom: 10 }}>Santé / urgence / sécurité</Text>
   
    <View style={styles.tableRow}>
      <Text style={styles.tableHeader}>Français</Text>
      <Text style={styles.tableHeader}>Darija</Text>
    </View>
    <View style={styles.tableRow}>
  <Text style={styles.column}>Je veux voir un médecin</Text>
  <Text style={styles.column}>Bghit nchouf Tbib</Text>
</View>
<View style={styles.tableRow}>
  <Text style={styles.column}>Appelez un medecin </Text>
  <Text style={styles.column}>Âayat l Tbib </Text>
</View>
<View style={styles.tableRow}>
  <Text style={styles.column}>Ambulance</Text>
  <Text style={styles.column}>Lambilance</Text>
</View>
<View style={styles.tableRow}>
  <Text style={styles.column}>Danger</Text>
  <Text style={styles.column}>Khatar</Text>
</View>
<View style={styles.tableRow}>
  <Text style={styles.column}>Au secours</Text>
  <Text style={styles.column}>Âatkouni</Text>
</View>
<View style={styles.tableRow}>
  <Text style={styles.column}>Je suis perdu(e)</Text>
  <Text style={styles.column}>Tlaft</Text>
</View>
<View style={styles.tableRow}>
  <Text style={styles.column}>Les toilettes</Text>
  <Text style={styles.column}>Mirhad</Text>
</View>
<View style={styles.tableRow}>
  <Text style={styles.column}>Je me sens malade</Text>
  <Text style={styles.column}>Ana mrid</Text>

</View>


  </View>
  
)}
</ScrollView>
            
            <Button title="Fermer" onPress={() => setModalVisible(false)} />
           
          </View>
        </View>
      </Modal>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f8', // Changé pour un gris très clair
    padding: 20,
    backgroundColor:'#D3D3D3',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:'#800020', // Couleur bleu vif
    paddingVertical: 12, // Ajustement de la hauteur du bouton
    paddingHorizontal: 20,
    borderRadius: 25, // Bords arrondis
    shadowColor: '#000', // Ajout d'ombre
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff', // Texte en blanc pour contraste
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  
  backgroundImage: {
    flex: 1,
    
    resizeMode: 'stretch', // Ou 'contain' selon votre préférence
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalScrollView: {
    maxHeight: 400,
    marginBottom: 20,
  },
  subTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'bordeaux',
  },
  subTitle2: {
    fontWeight: 'bold',
    marginBottom: 9,
    fontSize: 24,
    
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tableHeader: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#800000', 
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});

export default InfosPratique;
