const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {bddconnect}= require('./bdd/connectBDD');
const app = express();
const PORT = process.env.PORT || 5000;
const authrouter=require('./routes/authRoutes')
// Activer CORS pour toutes les origines
app.use(cors());

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());


//Connexion a la bdd
bddconnect();

app.use('/api/user', authrouter)


app.get('/',(req,res) => {
  res.send('connecte')
})

// Écouter sur toutes les interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on ${PORT}`);
});

