// implement your API here

//Build server using Express > Returns Function > Function returns Obj > Obj reps the Server

const express = require('express');

const greeter = require('./greeter.js');

const server = express();

server.get('/', (req, res) => {
    res.json('alive');
});

server.get('/greet', (req, res) => {
    res.json({ hello: 'stranger' });
});

server.get('/greet/:person', greeter);


server.listen(9000, () => console.log('Keep breathing'));