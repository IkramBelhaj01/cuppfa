import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, ScrollView, Button, ImageBackground } from 'react-native';
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
            <Button title="Submit Feedback" onPress={submitFeedback} />
          </View>
        </View>
      </Modal>

      <Button title="Leave Feedback" onPress={() => setModalVisible(true)} />
      <ScrollView style={styles.feedbackContainer}>
        {feedbacks.map((feedback, index) => (
          <View key={index} style={styles.feedbackItem}>
            <Text style={styles.feedbackText}>{feedback.message}</Text>
          </View>
        ))}
      </ScrollView>
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
    width: '100%',
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
      height: 2,
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
  },
  feedbackContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  feedbackItem: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
  },
  feedbackText: {
    fontSize: 16,
  },
  backButton: {
    backgroundColor: 'black', // Color of the button
    paddingVertical: 5, // Smaller padding for a thinner button
    paddingHorizontal: 10, // Narrow padding for a shorter button width
    margin: 40, // Increase margin to push it further from other content if needed
    borderRadius: 5, // Rounded corners
    alignSelf: 'center',
    
  },
  backButtonText: {
    color: 'white',
    fontSize: 14, // Smaller font size for the text
    textAlign: 'center',
  }
  
});

export default Avis;
