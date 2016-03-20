/**
 * Created by moonlace on 20/03/16.
 */
var index = require('./app');

var host = '0.0.0.0';
var port = '8080';

var express = require('express');
var app = express();

app.use(require('./app/index'));

app.listen(port, host);
console.log("Server is listening...");
