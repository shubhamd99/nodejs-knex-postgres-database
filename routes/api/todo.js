const express = require('express');
const router = express.Router();
const db = require('../../database/db');

router.get('/', function(req, res) {
    db.select().from('todo').then(function(data) {
        res.send(data);
    });
    // SELECT * FROM table_name
});

router.post('/', function(req, res) {
    db.insert(req.body).returning('*').into('todo').then(function(data) {
        res.send(data);
    })
    console.log(req.body);
    // INSERT INTO table_name(column1, column2) VALUES(value_1, value_2)
    // SELECT * FROM table WHERE id = inserted_row
});

router.patch('/:id', function(req, res) {
    db('todo').where({id: req.params.id}).update(req.body).returning('*').then(function(data) {
        res.send(data);
    });
    console.log(req.params.id);
});

router.put('/:id', function(req, res) {
    db('todo').where({id: req.params.id}).update({
        title: req.body.title || null,
        is_done: req.body.is_done || false
    }).returning('*').then(function(data) {
        res.send(data);
    });
    console.log(req.params.id);
    // UPDATE table_name SET title='', is_done='' WHERE id = '' 
});


module.exports = router;