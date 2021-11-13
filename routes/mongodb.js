
var connexionRouter = require('./connexion');


import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const personne = new mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
    age:Number,
    favoriteFoods: ["pizza","apple"],
    
  });

  
 
module.exports = mongoose.model('personne', personne)



