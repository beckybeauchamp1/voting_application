var app = require('express')();
var mongoose = require('./db/connection.js');
var routes = require('./config/routes');
var bodyParser = require('body-parser')
var http = require('http').Server(app);
var io = require('socket.io')(http);

// middleware configuration
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
  console.log('a vote connected');
  socket.on('disconnect', function(){
  console.log('vote disconnected');
});
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(routes);

http.listen(4000);
