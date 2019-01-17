// implement your API here //Build server using Express > Returns Function > Function returns Obj > Obj reps the Server
const express = require('express');

const greeter = require('./greeter.js');
const db = require('./data/db');

const server = express();

server.get('/', (req, res) => {
    res.json('alive');
});

server.get('/greet', (req, res) => {
    res.json({ hello: 'stranger' });
});

server.get('/api/users', (req, res) => {
    db.find()
    .then(user => {
        if (user) {
            res.status(200).json(user);
        }else{
            res.status(404).json({ message: 'user not found' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: "we fail, cant get users", error: err });
    });
});

server.get('/greet/:person', greeter);

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;

    db.findById(id).then(user => {
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).json({ message: "we fail, cant get user", error: err });
    })

});

server.listen(9000, () => console.log('Keep breathing'));