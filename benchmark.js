#!/usr/bin/env node
require('shelljs/global');

var TEST_DIR = 'scripts';

var shouldLog = (process.argv[2] === 'log');
var log = [];

function writeLog(msg, link) {
  console.log(msg);
  if (link) {
    msg = msg.replace(']', '](' + link + ')');
  }
  log.push(msg);
}

cd(__dirname + '/' + TEST_DIR);
var prefix;
ls().forEach(function (dir) {
  prefix = TEST_DIR + '/' + dir;
  writeLog('### [' + dir + ']', prefix)
  cd(dir)

  // Find the files
  var jsfile = ls('*.js')[0];
  var shfile = ls('*.sh')[0];

  if (!jsfile || !shfile) {
    console.error('Could not find your files. Please use proper extensions.');
    return;
  }

  // execute it
  var start_time,
      end_time,
      shell_time,
      shell_output,
      js_time,
      js_output;

  config.silent = true;

  start_time = new Date().getTime();
  js_output = exec('node ' + jsfile).output;
  end_time = new Date().getTime();
  js_time = end_time - start_time;
  writeLog(' - [ShellJS] took `' + js_time + '` milliseconds', prefix + '/' + jsfile);

  start_time = new Date().getTime();
  shell_output = exec('bash ' + shfile).output;
  end_time = new Date().getTime();
  shell_time = end_time - start_time;
  writeLog(' - [Bash] took `' + shell_time + '` milliseconds', prefix + '/' + shfile);

  if (shell_time < js_time) {
    writeLog('Bash was `' + (js_time/shell_time).toFixed(3) + '` times faster than ShellJS');
  } else {
    writeLog('ShellJS was `' + (shell_time/js_time).toFixed(3) + '` times faster than Bash');
  }

  if (shell_output !== js_output)
    writeLog('Output differs');

  // Clean up
  echo('=======================');
  echo();
  config.silent = false;
  cd('..')
});

if (shouldLog) {
  cd(__dirname);
  var text = log.join('\n\n');

  // Wipe out the old results
  cat('README.md').replace(/## Results(.|\n)*/, '## Results').to('README.md');

  // Append new docs to README
  sed('-i', /## Results/, '## Results\n\n' + text, 'README.md');
}
