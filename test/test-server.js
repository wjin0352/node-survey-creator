global.DATABASE_URL = 'mongodb://localhost/survey_app_test';

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server.js');
var Answer = require('../models/answers');
var Survey = require('../models/surveys');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('Survey', function() {
  before(function(done) {
    server.runServer(function() {
      Survey.create(
        {
          name: 'auto survey',
          function() {
            done();
          }
        });
    });
  });

  after(function(done) {
    Survey.remove(function() {
      done();
    });
  });
});

describe('survey', function() {
  it('should have a name');
  it('should have an array of questions');
  it('should have a creator_id');
})
