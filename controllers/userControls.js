const User = require('../models/User')
const Feedback = require('../models/Feedback');


const asyncHandler = require('express-async-handler'); // Ensure asyncHandler is correctly imported
const bcrypt = require('bcrypt'); // Use bcrypt for hashing and checking passwords

const registUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "Utilisateur déjà existant" });
    }
    
    const newUser = await User.create({ email, password });
    res.json({ success: true, message: "User registered successfully", user: newUser });
  });
  
const loginUser = asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        
        // Find user by email
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            // Compare the provided password with the hashed password in the database
            const isMatch = await bcrypt.compare(password, existingUser.password);
            if (isMatch) {
                res.json({ success: true, message: 'Vous êtes connecté avec succès' });
            } else {
                res.status(401).json({ success: false, message: 'Mot de passe incorrect' });
            }
        } else {
            res.status(404).json({ success: false, message: 'Utilisateur non trouvé' });
        }
    });
    


const logoutuser = asyncHandler(async (req, res) => {
      res.send("user decon avec succe")
    });
    //find all
const getallUser = asyncHandler(async (req, res) => {
        try{
            const userTrouve=await User.find();
            res.json(userTrouve);
        }
        catch(error){
            throw new Error(error);
        }
    })
    


module.exports={registUser,loginUser,logoutuser,getallUser}