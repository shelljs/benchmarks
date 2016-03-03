#!/usr/bin/env node

// install the first version manually so we have something to use
process.chdir(__dirname + '/../shelljs/0.6.0');
var c = require('child_process').exec('npm install --production', function(code, stdout) {
  console.log(stdout);
  require('../shelljs/0.6.0');
  set('-e');
  cd(__dirname + '/..');
  exec('git submodule init');
  exec('git submodule update');
  cd(__dirname + '/../shelljs');
  ls().forEach(function (k) {
    cd(k);
    exec('npm install --production');
    cd('..');
  });
});
