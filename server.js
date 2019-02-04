'use strict';

const express = require('express');
const fs      = require('fs');
const http    = require('http');
const path    = require('path');

const herokuHost   = 'erlkonig-lisp-console.herokuapp.com';
const isProduction = !!(process.env.NODE_ENV === 'production');
const host         = isProduction ? herokuHost : 'localhost';

const oneHour    = 60 * 60 * 1000;
const httpConfig = { host: host };
const port       = process.env.PORT || 5000;
const utf8       = { encoding: 'utf8' };

const app              = express();
const noncePlaceholder = /\$NONCE\$/g;
const template         = fs.readFileSync('./templates/app', utf8);

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
  let nbr;
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
  let id = '';
  for (let i = 0; i < 32; i++) {
    const random = Math.random() * 16 | 0;
    id += _uuid(i, random);
  }
  return id;
}

const webpage = template.replace(noncePlaceholder, uuid());

app.use(express.static(path.join(__dirname, 'public'), { index: webpage }));

app.get('/', function (req, res) { res.send(webpage); });

process.on('SIGINT',  exitProcess);
process.on('SIGTERM', exitProcess);

app.listen(port, onStart);
