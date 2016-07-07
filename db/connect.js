// Once Mongo is installed, we can connect to MongoDB through the Mongo.Client‘s connect method

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
