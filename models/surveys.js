var mongoose = require('mongoose');

var QuestionsSchema = new mongoose.Schema({
  answers: [String],
  prompt: String
});

var SurveySchema = new mongoose.Schema({
  name: { type: String, required: true },
  questions: [QuestionsSchema],
  creator_id: String
});

  // SurveySchema.methods.someMethod = function() {

  // };


var Survey = mongoose.model('Survey', SurveySchema);

module.exports = Survey;

