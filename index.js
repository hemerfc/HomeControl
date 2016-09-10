'use strict';

const express = require('express')
const socketIO = require('socket.io');
const path = require('path')

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, '/public/index.html')

const server = express()
  .use(express.static( path.join(__dirname, '/public'), {'index': ['index.html']}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected')
  socket.on('disconnect', () => console.log('Client disconnected'))
});

// setInterval(() => io.emit('time', new Date().toTimeString()), 1000)
let state = [];
let i = 0;
setInterval(() => {
  i++;
  let id = (i % 4) + 1;
  state[id] = (state[id]==="on")?"off":"on"
  let action = {type:'MONITOR_UPDATE_VALUE', data: { id:id , value: state[id]}};
  console.log(action);
  io.emit('action', action)
 }, 1000)
