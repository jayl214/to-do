"use strict";

const express       = require('express');
const indexRoutes  = express.Router();

module.exports = function() {

  indexRoutes.get("/", function(req, res) {

    console.log('in / route')

//templating variables here
    res.render('index')
  });

  indexRoutes.post("/", function(req, res) {

  });

  return indexRoutes;

}
