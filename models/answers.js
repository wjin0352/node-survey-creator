var mongoose = require('mongoose');

var AnswersSchema = new mongoose.Schema({
  answers: [String],
  survey_id: String
});

var Answer = mongoose.model('Answer', AnswersSchema);

module.exports = Answer;
