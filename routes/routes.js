var express = require('express');
var Survey = require('../services/surveys');
var router = express.Router();

// callback patter
// router.get('/surveys', function(req, res) {
//   Survey.list(function(err, survey) {
//     if(err) {
//       return res.status(400).json(err);
//     }
//     res.json(survey);
//   });
// });

// callback pattern
// router.post('/surveys', function(req, res) {
//   Survey.save(res.body.name, function(err, survey) {
//     if(err) {
//       return res.status(400).json(err);
//     }
//     res.json(survey);
//   });
// });

// Promise pattern
router.get('/surveys', function(req, res) {
  Survey.list()
    .then(function(survey) {
      res.json(survey);
    })
    .catch(function(err) {
      res.status(400).json(err);
    });
});

router.post('/surveys', function(req, res) {
  Survey.save()
    .then(function(survey) {
      res.json(survey);
    })
    .catch(function(err) {
      res.status(400).json(err);
    });
});

// router.put

module.exports = router;
