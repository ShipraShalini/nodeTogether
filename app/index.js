/**
 * Created by moonlace on 20/03/16.
 */

var express = require('express');
var app =express();
const motivations = require('motivations');

app.get('/', function (request, response) {
    response.send(motivations[0]);
});


module.exports = app;
