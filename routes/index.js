var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const mongoose = require('mongoose');

  /*const personne = mongoose.model('personne', personne);*/
  const TankSchema = new mongoose.Schema({
    name:  String, // String is shorthand for {type: String}
    age:Number,
    favoriteFoods: ["pizza","apple"],
  });
  
  const Tank = mongoose.model('personne', TankSchema);
 
  const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'person'; 
  const db = mongoose.connect(`mongodb://${server}/${database}`);
  
  
  function handleError(error) {
    console.error(`Error ${error}\n${error.stack}`);
    process.exit(2);
  }
  exec();

  function exec() {

    //Create Many Records with model.create

    var array = [{ name: 'MMM',age:15 , favoriteFoods: ["pizza","apple"]}, { name: 'abir' ,age: 23 , favoriteFoods: ["pizza","apple"]}];
    Tank.create(array,(error1, newTank) => {
      if (error1) {
        return handleError(error1);
      }
      console.log('Successfully saved tank');
          process.exit(0);
      
    });


    // Use model.find() to Search Your Database

    Tank.find({name: 'abir'}, function(err, data){
      console.log(data); 
    });


      // Use model.findOne() to Return a Single Matching Document from Your Database
      Tank.findOne({favoriteFoods :'pizza'}, function(err, data) {
        
      //  console.log(data);
      });  

      //Use model.findById() to Search Your Database By _id

      var personId = '6197c022f22606367c88b17e';
      Tank.findById(personId, function (err, docs) {
      if (err){
        console.log(err);
      }
       else{
        console.log("Result : ", docs);
    }
});

//Perform New Updates on a Document Using model.findOneAndUpdate()

      const filter = { name: 'abir' };
       const update = { age: 23 };
  
      Tank.findOneAndUpdate(filter, update,  function (err, data) {
        if (err){
          console.log(err);
        }
         else{
          console.log("Result find and update : ", data);
      }
  });


  //Delete One Document Using model.findByIdAndRemove
  var Id = '197c022f22606367c88b17e';
  Tank.findByIdAndRemove(Id, function (err, oldContent) {
   console.log("Id supprimer");
  });

  

  //MongoDB and Mongoose - Delete Many Documents with model.remove()
    var nameToRemove = "abir";
    Tank.deleteMany({name: nameToRemove}, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  
  


  }




module.exports = router;
