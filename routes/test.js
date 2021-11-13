
  import mongoose from 'mongoose';
  const personne = mongoose.model('personne', personne);

  const small = new personne({ name: 'abir' });
    small.save(function (err) {
      if (err) return handleError(err);
      // saved!
    });
    
    // or
    
    personne.create({ name: 'small' }, function (err, name) {
      if (err) return handleError(err);
      // saved!
    });
    
    // or, for inserting large batches of documents
    personne.insertMany([{ name: 'small' }], function(err) {
    
    });
  
  
  