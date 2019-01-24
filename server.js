'use strict';

var express = require('express');
var fs      = require('fs');
var http    = require('http');
var path    = require('path');

var herokuHost   = 'erlking-lisp-console.herokuapp.com';
var isProduction = !!(process.env.NODE_ENV === 'production');
var host         = isProduction ? herokuHost : 'localhost';

var oneHour    = 60 * 60 * 1000;
var httpConfig = { host: host };
var port       = process.env.PORT || 5000;
var utf8       = { encoding: 'utf8' };
var signposts  = [8, 12, 16, 20];

var app              = express();
var noncePlaceholder = /\$NONCE\$/g;
var template         = fs.readFileSync('./templates/app', utf8);

if (!isProduction) {
  httpConfig.port = port;
}

function exitProcess() {
  process.exit();
}

function onStart() {
  console.log('Server running on port ' + port + '.');
  preventHerokuSleep();
}

function pingHeroku() {
  http.get(httpConfig);
}

function preventHerokuSleep() {
  setInterval(pingHeroku, oneHour);
  console.log('Pinging app to prevent spin-down.');
}

function _uuid(i, j) {
  var nbr;
  if (i === 12) {
    nbr = 4;
  } else if (i == 16) {
    nbr = j & 3 | 8;
  } else {
    nbr = j;
  }
  return nbr.toString(16);
}

function uuid() {
  var id = '';
  for (var i = 0; i < 32; i++) {
    var random = Math.random() * 16 | 0;
    if (signposts.indexOf(i) >= 0) {
      id += '-';
    }
    id += _uuid(i, random);
  }
  return id;
}

var webpage = template.replace(noncePlaceholder, uuid());

app.use(express.static(path.join(__dirname, 'public'), { index: webpage }));

app.get('/', function (req, res) { res.send(webpage); });

process.on('SIGINT',  exitProcess);
process.on('SIGTERM', exitProcess);

app.listen(port, onStart);
