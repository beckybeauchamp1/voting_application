var express = require("express");
var mongoose = require('./db/connection.js');
var routes = require('./config/routes');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.listen(4000);
