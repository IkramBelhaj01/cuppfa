import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView ,Image,ImageBackground } from 'react-native';
const backgroundImage = require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Super-League-africaine-CAF.jpg');
const groupsData = [
    {
        id: 'A', 
        matches: [
          { time: '10:00', team1: 'Guinée équatoriale', flag1: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/GuinneeEQ.png'), team2: 'Nigeria', flag2: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Nigeria.png') },
          { time: '14:00', team1: 'Côte d\'Ivoire', flag1: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/images/cote_d_ivoire.png'), team2: 'Guinée-Bissau', flag2: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Guinea-Bissau.png') }
        ]
      },
      {
        id: 'B', 
        matches: [
          { time: '11:00', team1: 'Cap-Vert  ', flag1: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Cap-Vert.png'), team2: 'Égypte', flag2: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Egypte.png') },
          { time: '15:00', team1: 'Ghana ', flag1: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Ghanapng.png'), team2: 'Mozambique', flag2: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Mozambique.png') }
        ]
      },
      {
        id: 'C', 
        matches: [
          { time: '12:00 ', team1: 'Sénégal', flag1: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Senegal.png'), team2: 'Cameroun', flag2: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Cameroune.png') },
          { time: '15:00', team1: 'Guinée ', flag1: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Guinee.png'), team2: 'Gambie', flag2: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Gambie.png') }
        ]
      },
      {
        id: 'D', 
        matches: [
          { time: '13:00 ', team1: 'Angola', flag1: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Angola.png'), team2: 'Burkina Faso', flag2: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/burkina faso.png') },
          { time: '17:00', team1: 'Mauritanie ', flag1: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/mauritania.png'), team2: 'Algérie', flag2: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/algerie.png') }
        ]
      },
      {
        id: 'E', 
        matches: [
          { time: '18:00  ', team1: 'Mali', flag1: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/mali.png'), team2: 'Afrique du Sud', flag2: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Afrique du sude.png') },
          { time: '20:00', team1: 'Namibie ', flag1: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/nambie.png'), team2: 'Tunisie', flag2: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Tunisie.png') }
        ]
      },
      {
        id: 'F', 
        matches: [
          { time: '19:00  ', team1: 'Maroc', flag1: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/images/maroc.png'), team2: 'RD Congo', flag2: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/congo.png') },
          { time: '21:00', team1: ' Zambie  ', flag1: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Zambie.png'), team2: 'Tanzanie', flag2: require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/pictures/Tanzania.jpg') }
        ]
      },
 
];


const CalendarPage = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState({});
  
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView style={styles.container}>
        {groupsData.map(group => (
          <TouchableOpacity 
            key={group.id} 
            style={styles.groupButton}
            onPress={() => {
              setSelectedGroup(group);
              setModalVisible(true);
            }}
          >
            <Text style={styles.groupTitle}>Groupe {group.id}</Text>
          </TouchableOpacity>
        
        ))}
       
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <ImageBackground source={require('C:/Users/HP/Desktop/cuppfa/frontend/frontend/Components/CalendarPage/images/backround.jpg')} style={styles.modalView}>
              <Text style={styles.modalText}>Matches for Group {selectedGroup.id}</Text>
              {selectedGroup.matches?.map((match, index) => (
                <View key={index} style={styles.matchDetail}>
                <View style={styles.teamContainer}>
                <Image source={match.flag1} style={styles.flag} />
                <Text style={styles.teamText}>{match.team1}</Text>
                </View>
                <View style={styles.centerContainer}>
                <Text style={styles.timeText}>{match.time}</Text>
                <Text style={styles.vsText}>vs</Text>
                </View>
                <View style={styles.teamContainer}>
                <Text style={styles.teamText}>{match.team2}</Text>
                <Image source={match.flag2} style={styles.flag} />
                </View>
            </View>
                ))}
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </Modal>
        
       </ScrollView>
       </ImageBackground>
    );
  };
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
     backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover' // ou 'contain' selon vos besoins
  },
    groupButton: {
      backgroundColor: 'green',
      padding: 15,
      marginVertical: 30,
      borderRadius: 100,
      marginLeft:60,
      marginRight:60,
      alignItems: 'center',
    },
    groupTitle: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
     
      
    },
    modalView: {
        margin: 20,
        backgroundColor: 'transparent', // Remove background color to let background image show
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: 'white',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%', // Wider modal for better content display
        maxWidth: 600, // Ensures modal isn't too wide on larger devices
        overflow: 'hidden', // Ensures the background image respects the border radius
      },
      contentContainer: {
        padding: 35,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center', // Center content vertically and horizontally
      },
      
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',// Darker text for better readability
    },
    matchDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Assure une répartition aux extrémités
        marginBottom: 10,
        width: '100%', // Utilise toute la largeur disponible
      },
      centerContainer: { 
        flexDirection: 'column', // Vertically stack elements
        justifyContent: 'center', 
        alignItems: 'center',
      },
      flag: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'cover',
      },
      vsText: {
        fontSize: 18,
        fontWeight: 'bold',
        color:"white",
        marginVertical: 5, // Adjust spacing vertically
      },
      timeText: {
        fontSize: 16,
        color:"white",
      },
      teamContainer: { 
        flexDirection: 'row',
        alignItems: 'center',
        
      },
      teamText: {
        fontSize: 16,
        marginHorizontal: 5,
        color:"white" // Space for readability
      },
      
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop: 20,
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
  });
  
  
  export default CalendarPage;