const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const chatHandler = require('../sockets/chat');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } }); //enable front

io.on('connection', (socket) => {
    chatHandler(socket, io);
});

server.listen(3000, () => { 
    console.log('Listening on port 3000');
});

