// survey application allows users to create their own surveys with questions and it stores answers to show the creator.  should store questions in an array or object.  User can create many surveys and title them, and save them to the database with the questions.  People should be able to get on the site and pick a survey to fill out and save to database.

var express = require('express');
var app = express();



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})


app.listen(3000, function() {
  console.log('listening on 3000');
});



