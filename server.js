// survey application allows users to create their own surveys with questions and it stores answers to show the creator.  should store questions in an array or object.  User can create many surveys and title them, and save them to the database with the questions.  People should be able to get on the site and pick a survey to fill out and save to database.

var connect = require('./db/connect');
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');
var app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

connect().then(function() {
  app.listen(3000, () => {
    console.log('app listening on 3000');
  })
}).catch(function(err) {
  console.log('app not listening...')
})

// connect(function() {
//   app.listen(3000, () => {
//     console.log('app listening on 3000');
//   })
// }, function() {
//   process.exit(1);
// })



