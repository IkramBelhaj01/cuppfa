const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model, optional if you want anonymous feedback
        required: false
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true });
const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;