var Survey = require('../db/mongoose');

exports.save = function(name) {
  return new Promise(function(resolve, reject) {
    Survey.create({ name: name}, function(err, survey) {
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

exports.update = function() {
  return new Promise(function(resolve, reject) {
    Survey.findOneAndUpdate({_id: id}, {name: surveyName},
      function(err, survey) {
        if(err) {
          reject(err);
        } else {
          resolve(survey);
        }
      });
  });
};

exports.remove = function(id) {
  return new Promise(function(resolve, reject) {
    Survey.findByIdAndRemove(id, function(err, survey) {
      if(err) {
        reject(err);
      } else {
        resolve(survey);
      }
    });
  });
};
