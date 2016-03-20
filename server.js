/**
 * Created by moonlace on 20/03/16.
 */


var host = '0.0.0.0';
var port = '8080';

var express = require('express');
var app = express();

app.listen(port, host);
console.log("Server is listening...");
