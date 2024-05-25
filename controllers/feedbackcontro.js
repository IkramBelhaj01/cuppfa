const Feedback = require('../models/Feedback');


const asyncHandler = require('express-async-handler');
// In your backend controller for adding feedback
const addFeedback = asyncHandler(async (req, res) => {
    const { message } = req.body;
    const newFeedback = await Feedback.create({ message });
    if (newFeedback) {
      res.status(201).json({
        success: true,
        message: 'Feedback ajouté avec succès',
        feedback: newFeedback
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to add feedback'
      });
    }
  });
  
const getAllFeedback = asyncHandler(async (req, res) => {
    try {
        const feedbacks = await Feedback.find(); // Utilisez .find() sans argument pour récupérer tous les documents
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des avis", error: error.message });
    }
});
module.exports={getAllFeedback,addFeedback}