#!/usr/bin/env node

// install the first version manually so we have something to use
var curDir = process.cwd();
process.chdir(__dirname + '/../shelljs/0.6.0');
var c = require('child_process').exec('npm install --production', function(code, stdout) {
  console.log(stdout);
  // Use v0.6.0, since this has no runtime dependency
  require('../shelljs/0.6.0');
  cd(__dirname + '/../shelljs');
  ls().forEach(function (k) {
    cd(k);
    exec('npm install --production');
    cd('..');
  });
});
