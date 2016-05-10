var express = require('express');
var httpServer = require('http');
var mongoose = require('./db/connection.js');
var Models = require('./db/schema.js');
var VotingOption =  Models.VotingOptionModel;
var VotingSession =  Models.VotingSessionModel;
var app = express();
var routes = require('./config/routes');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require("express-session");
var RedisStore = require("connect-redis")(session);
var votingSessionsController = require("./controllers/votingSessionsController.js")

var http = httpServer.createServer(app);
var io = require('socket.io').listen(http);


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser('super'));


var sessionMiddleware = session({
  store: new RedisStore({}), // XXX redis server config
  secret: "super",
  resave: false,
  saveUninitialized: false
});

io.use(function(socket, next){
  sessionMiddleware(socket.request, socket.request.res, next)
});

app.use(sessionMiddleware);

io.sockets.on('connection', function(socket){
  // console.log(socket.request)

  // socket.request.session
  socket.on('login', function(password){
    console.log(password)
    votingSessionsController.findVotingSession(password).then(function(res){
      console.log(res)
      socket.emit("results", res)
    })
  });
});

app.use(routes);

http.listen(4000, function(){
  console.log("Listening")
});
