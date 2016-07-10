var mongoose = require('mongoose');

var QuestionsSchema = new mongoose.Schema({
  answers: [String],
  prompt: String
})

var SurveySchema = new mongoose.Schema({
  name: { type: String, required: true },
  questions: [QuestionsSchema]
});

var Survey = mongoose.model('Survey', SurveySchema);

module.exports = Survey;

