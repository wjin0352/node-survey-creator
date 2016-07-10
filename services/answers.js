var Answer = require('../models/answers');

exports.save = function(survey_id, answers) {
  return new Promise(function(resolve, reject) {
    Answers.create({ survey_id: survey_id, answers: answers}, function(err, answer) {
      if(err) {
        reject(err);
      } else {
        resolve(answer);
      }
    });
  });
};

