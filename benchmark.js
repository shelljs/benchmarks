#!/usr/bin/env node
require('shelljs/global');

var TEST_DIR = 'scripts',
    RUNCOUNT = 1;

cd(TEST_DIR);
ls().forEach(function (dir) {
  echo(dir)
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
      shell_output,
      js_output;

  config.silent = true;

  start_time = new Date().getTime();
  js_output = exec('node ' + jsfile).output;
  end_time = new Date().getTime();
  echo('> ShellJS took ' + (end_time - start_time) + ' milliseconds');

  start_time = new Date().getTime();
  shell_output = exec('bash ' + shfile).output;
  end_time = new Date().getTime();
  echo('> Bash took ' + (end_time - start_time) + ' milliseconds');

  if (shell_output !== js_output)
    echo('Output differs');

  // Clean up
  echo('=======================');
  echo();
  config.silent = false;
  cd('..')
});
