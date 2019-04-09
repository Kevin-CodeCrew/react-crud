var express = require('express');
var router = express.Router();
var ToDoCollection = require("../models/ToDoSchema");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/list', (req, res) => {
    ToDoCollection.find({}, (errors, results) => {
        if (errors) res.send(errors);
        else res.send(results);
    });
});

router.post('/create', (req, res) => {
    ToDoCollection.create(req.body, (errors, results) => {
        if (errors) res.send(errors);
        else res.send(results);
    });
});

router.delete('/delete', (req, res) => {
    ToDoCollection.deleteOne(
        {_id: req.body._id}, (errors, results) => {
            if (errors) res.send(errors);
            else res.send(results);
        });
});


// This function updates the record specified by the id passed in
router.put('/update/:id', (req, res, next)=> {
    Todos.findOneAndUpdate({_id: req.params.id}, {
        todo_description: req.body.todo_description,
        todo_is_done: req.body.todo_is_done,
        todo_responsible: req.body.todo_responsible
    }, function (err, result) {
        if (err) {
            throw(err);
        } else {
            // res.json(result);
            res.json({result: 'OK'});
        }
    });

});
module.exports = router;
