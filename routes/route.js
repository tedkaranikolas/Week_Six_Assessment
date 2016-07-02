var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/heroDB');

var Hero = require('../models/hero');

// base url
router.get( '/', function (req, res){
  console.log( 'Biggles at base url' );
  res.sendFile( path.resolve( 'views/index.html') );
});

//router DELETE to delete hero by ID
router.delete('/deleteHero', function(req, res){
  console.log('Biggles in deleteHero with ' + req.body.id);
  Hero.findByIdAndRemove(req.body.id, function(err){
    if(err){
      res.sendStatus(500);
    } else {
    res.sendStatus(200);
    }
  });
});

//POST route to send
router.post('/postHero', function(req, res){
  console.log('hit postHero');
  var newHero = new Hero ({
    alias : req.body.alias,
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    city : req.body.city,
    power_name : req.body.power_name
  });
  newHero.save(function(err){
    if (err) {
    console.log(err);
    res.sendStatus(500);
  } else {
    console.log('Biggles saved a hero!');
    res.sendStatus(200);
    }
  });//end save
});//end router POST

router.get('/retrieveHero', function(req, res){
  console.log('Biggles in retrieveHero');
  Hero.find()
  .then(function(data){
    res.send(data);
  });
});//end GET

module.exports = router;
