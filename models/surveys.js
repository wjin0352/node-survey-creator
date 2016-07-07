var mongoose = require('mongoose');

var SurveySchema = new mongoose.Schema({
  name: { type: String, required: true },
  surveys: [],
  questions: []
});

var Survey = mongoose.model('Survey', SurveySchema);

module.exports = Survey;

// EXAMPLE
// var mongoose = require('mongoose');

// create the schema through mongoose
// var ItemSchema = new mongoose.Schema({
//     name: { type: String, required: true }
// });

// create the model through the schema you made
// var Item = mongoose.model('Item', ItemSchema);

// export the model to be used else where
// module.exports = Item;
