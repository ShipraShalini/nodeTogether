/**
 * Created by moonlace on 20/03/16.
 */
var index = require('./app');

var host = process.env.HOST;
var port = process.env.PORT;

var express = require('express');
var app = express();

app.use(require('./app/index'));
app.use(require('./app/motivate'));

app.listen(port, host);
console.log("Server is listening...");
