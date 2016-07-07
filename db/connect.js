// contains logic for connecting to the database. You will require this anywhere that you need to connect to the database:

// Once Mongo is installed, we can connect to MongoDB through the Mongo.Client‘s connect method

var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/');
var env = require('../environment');
var config = require('./config');

mongoose.connect(config[env].url);



mongoose.connection.on('error', function(err) {
  console.error('Could not connect, Error:', err );
});

mongoose.connection.once('open', function() {
  var survey = mongoose.Schema({
    title: {type: String, unique: true},
    questions: [],
    answer: [],
  });

  var Survey = mongoose.model('Survey', survey);

  module.exports = Survey;
});




var MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds015335.mlab.com:15335/node-survey-creator', (err, database) => {
//     if(err) return console.log(err);
//     db = database
//     app.listen(3000, () => {
//       console.log('Listening on 3000')
//     })
//   });

module.exports = function() {
  return new Promise(function(resolve, reject) {
    MongoClient.connect('mongodb://localhost/', function(err, db) {
      if (err) {
        console.error(err);
        db.close();
        reject(err);
        return;
      }
      console.log('Connected to MongoDB database');
      resolve(db);
    });
  })
}


// module.exports = function(callback, errback) {
//   MongoClient.connect('mongodb://localhost', function(err, db) {
//     if (err) {
//         console.error(err);
//         db.close();
//         errback(err);
//         return;
//       }
//       console.log('Connected to MongoDB database');
//       callback(db);
//     });
// }
