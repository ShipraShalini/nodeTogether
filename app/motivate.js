/**
 * Created by moonlace on 20/03/16.
 */

var express = require('express');
var app =express();
const motivations = require('motivations');

app.get('/motivate/:index', function (request, response) {
    var index = request.params.index;
    response.send(motivations[index]);
});


module.exports = app;
