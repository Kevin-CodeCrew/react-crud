var express = require('express');
var router = express.Router();
var StudentColletion = require("../models/StudentSchema");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', (req, res)=>{
  StudentColletion.find({}, (errors, results)=>{
  if(errors) res.send(errors);
  else res.send(results);
  });
});

router.post('/add', (req, res)=>{
  StudentColletion.create(req.body, (errors, results)=>{
    if(errors) res.send(errors);
    else res.send(results);
  });
});

router.delete('/delete', (req, res)=>{
  StudentColletion.deleteOne(
      {studentID: req.body.studentID}, (errors, results)=>{
    if(errors) res.send(errors);
    else res.send(results);
  });
});

module.exports = router;
