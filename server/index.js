const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = require("socket.io")(server, {
   cors: {
     origin: "*",
     methods: ["GET", "POST"],
     transports: ["websocket"],
     credentials: true,
   },
   allowEIO3: true,
});

//const io = require("socket.io")(server, {});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
  });
});

server.listen(8080, () => {
  console.log("listening on *:8080");
});

// const http = require('http').createServer()
// const express = require('express');
// const app = express();
// const httpnew = require('http');
// const server = httpnew.createServer(app);
// const { Server } = require("socket.io");

// const port = 8080
// const dotenv = require('dotenv')

// dotenv.config({path: './config.env'})

// const io = require('socket.io')(http, {
//     cors: {origin: '*'}
// })

// io.on('connection', (socket) => {
//     console.log('a user connected');

//     socket.on('message', (message) =>{
//         console.log(message);
//         io.emit('message', `${socket.id.substr(0,2)} said ${message}` );
//     });
// })

// http.listen(8080, () => console.log('listening on http://localhost:8080') );
