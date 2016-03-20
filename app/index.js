/**
 * Created by moonlace on 20/03/16.
 */

var express = require('express');
var app =express();

app.get('/', function (request, response) {
    response.send("Hello");
});


module.exports = app;
