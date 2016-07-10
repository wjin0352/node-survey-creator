var express = require('express');
var Survey = require('../services/surveys');
var Answer = require('../services/answers')
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
  Survey.save(req.body.name, req.body.questions)
    .then(function(survey) {
      res.json(survey);
    })
    .catch(function(err) {
      res.status(400).json(err);
    });
});

router.post('/surveys/:id/answers', function(req, res) {
  Answer.save(req.params.id, req.body.answers)
    .then(function(ans) {
      res.json(ans);
    })
    .catch(function(err) {
      res.status(400).json(err);
    });
})

router.put('/surveys/:id', function(req, res) {
  Survey.update(req.params.id, req.body.answers)
    .then(function(survey) {
      res.status(200).json(survey);
    })
    .catch(function(err) {
      res.status(400).json(err);
    });
});

router.delete('/surveys/:id', function(req, res) {
  Survey.remove(req.params.id)
    .then(function(survey) {
      res.status(200).json(survey);
    })
    .catch(function(err) {
      res.status(400).json(err);
    });
});

module.exports = router;



// exports.update = function() {
//   return new Promise(function(resolve, reject) {
//     Survey.findOneAndUpdate({_id: id}, {name: surveyName},
//       function(err, survey) {
//         if(err) {
//           reject(err);
//         } else {
//           resolve(survey);
//         }
//       });
//   });
// };

// exports.remove = function() {
//   return new Promise(function(resolve, reject) {
//     Survey.findByAndRemove(id, function(err, survey) {
//       if(err) {
//         reject(err);
//       } else {
//         resolve(survey);
//       }
//     });
//   });
// };
