#!/usr/bin/env node
// Use v0.6.0, since this has no runtime dependency
require('../shelljs/0.6.0');
cd('shelljs');
ls().forEach(function (k) {
  cd(k);
  exec('npm install --production');
  cd('..');
});
