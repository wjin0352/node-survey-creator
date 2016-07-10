var Survey = require('../models/surveys');

exports.save = function(name, questions) {
  return new Promise(function(resolve, reject) {
    Survey.create({ name: name, questions: questions}, function(err, survey) {
      if(err) {
        reject(err);
      } else {
        resolve(survey);
      }
    });
  });
};

exports.list = function() {
  return new Promise(function(resolve, reject) {
    Survey.find(function(err, survey) {
      if(err) {
        reject(err);
      } else {
        resolve(survey);
      }
    });
  });
};


// exports.update = function(id, questions) {
//   return new Promise(function(resolve, reject) {
//     Survey.findOneAndUpdate({_id: id}, {answers: answers}, {new: true},
//       function(err, survey) {
//         if(err) {
//           reject(err);
//         } else {
//           resolve(survey);
//         }
//       });
//   });
// };

exports.remove = function() {
  return new Promise(function(resolve, reject) {
    Survey.findByAndRemove(id, function(err, survey) {
      if(err) {
        reject(err);
      } else {
        resolve(survey);
      }
    });
  });
};



