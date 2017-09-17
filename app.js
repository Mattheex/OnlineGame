const express = require('express');
var app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


io.sockets.on('connection', function(socket) {

  socket.emit("msg", "message server de bienvenue")

  // Start listening for mouse move events
  socket.on('button', function(data) {

    var l = data.length
    var c;
    var j = data.lenght - 1
    console.log(l)


    for (i = 0; i < data.length / 2; i++) {
      c = data[i]
      data[i] = data[j]
      data[j] = c
      console.log("i : " + i + "  j : " + j)
      console.log("c : " + c + "  data : " + data + "\n")
      j--
    }

    socket.emit('change', data);
  });
});

http.listen(port, function() {
  console.log('listening on :' + port);
});
