import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, ScrollView, Button, Image } from 'react-native';
import axios from 'axios';

const Avis = ({ navigation }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newFeedback, setNewFeedback] = useState('');

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('http://192.168.100.115:5000/api/user/getAllFeedback');
      setFeedbacks(response.data || []);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  const submitFeedback = async () => {
    if (newFeedback.trim()) {
      try {
        const response = await axios.post('http://192.168.100.115:5000/api/user/feedback', { message: newFeedback });
        if (response.data.success) {
          setModalVisible(false);
          setNewFeedback('');
          fetchFeedbacks();
          alert('Feedback added successfully');
        } else {
          alert('Feedback submission failed: ' + response.data.message);
        }
      } catch (error) {
        console.error('Error submitting feedback:', error);
        alert('Failed to submit feedback: ' + (error.response?.data?.message || "Network error"));
      }
    } else {
      alert('Please enter a feedback message.');
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Leave Feedback" color="#4CAF50" onPress={() => setModalVisible(true)} />
      <ScrollView style={styles.feedbackContainer}>
        {feedbacks.map((feedback, index) => (
          <View key={index} style={styles.feedbackItem}>
            <Image source={{ uri: feedback.imageUrl }} style={styles.image} />
            <View style={styles.feedbackContent}>
              <Text style={styles.feedbackText}>{feedback.message}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              onChangeText={setNewFeedback}
              value={newFeedback}
              placeholder="Leave your feedback here..."
              multiline
            />
            <Button title="Submit Feedback" color="#4CAF50"  onPress={submitFeedback} />
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('AccueilPage')}>
        <Text style={styles.backButtonText}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#f0f0f0',
  },
  feedbackContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  feedbackItem: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  feedbackContent: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-start', // Aligner le texte à gauche plutôt qu'au centre
    justifyContent: 'center',
    backgroundColor: '#ffffff',
},

  feedbackText: {
    fontSize: 16,
    color: '#333333',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    backgroundColor: '#ffffff',
  },
  backButton: {
    backgroundColor: "#4CAF50" ,
    padding: 10,
    margin: 40,
    borderRadius: 5,
    alignSelf: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default Avis;
