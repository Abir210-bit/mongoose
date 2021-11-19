
const mongoose = require('mongoose');

  /*const personne = mongoose.model('personne', personne);*/
  const TankSchema = new mongoose.Schema({
    size: String
  });
  
  const Tank = mongoose.model('Tank', TankSchema);
 
  const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'contact2'; 
  const db = mongoose.connect(`mongodb://${server}/${database}`);
  
  console.log("bonjour");