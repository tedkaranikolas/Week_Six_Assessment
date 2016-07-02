var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');

//require model Hero
var Hero = require('../models/hero');

//mongoose.connect('mongodb://localhost:27017/heroDB');

app.use(bodyParser.json());

//require routes
var router = require('../routes/route');

//use route.js
app.use('/', router);

//spin server until last call
app.listen( 4242, 'localhost', function( req, res ){
  console.log( 'biggles listening on 4242' );
});

// static folder
app.use( express.static( 'public' ) );
