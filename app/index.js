/**
 * Created by moonlace on 20/03/16.
 */

var express = require('express');
var app =express();
const motivations = require('motivations');
var pickOne =require('pick-one');

app.get('/', function (request, response) {
    response.send(pickOne(motivations));
});


module.exports = app;
