// this is the page to connect to the chatbox with a username

const exrpess = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = exrpess();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

function enterUsername(socket, username) {
  socket.username = username;
  socket.emit('usernameSet', { username });
  console.log(`User connected: ${username}`);
}
