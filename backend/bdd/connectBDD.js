const mongoose=require('mongoose')

// Connexion à MongoDB
const bddconnect=()=>{

    mongoose.connect('mongodb://localhost:27017/CUP', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => console.log('MongoDB Connected'))
      .catch(err => console.error('Erreur de connexion à MongoDB :', err));
      
}

module.exports={bddconnect}