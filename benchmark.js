#!/usr/bin/env node
require('./shelljs/0.6.0');

var TEST_DIR = 'test';

var shouldLog = (process.argv[2] === 'log');
var markdownFile = __dirname + '/README.md';
if (env.CI) {
  shouldLog = true;
  markdownFile = __dirname + '/index.md';
}
var log = [];

var VERSION_FILE = 'version.txt';

// @returns < 0 if a is an earlier version than b
//          > 0 if a is a later version than b
//          = 0 if a is an equivalent version to b
function versionCmp(a, b) {
  var aParts = a.split('.');
  var bParts = b.split('.');

  var maxLen = Math.max(aParts.length, bParts.length);
  for (var k=0;k<maxLen;k++) {
    if (Number(aParts[k]) < Number(bParts[k]))
      return -1;
    else if (Number(aParts[k]) > Number(bParts[k]))
      return 1;
  }
  return 0;
}

function writeLog(msg, link) {
  if (!msg)
    msg = '';
  console.log(msg);
  if (link) {
    msg = msg.replace(']', '](' + link + ')');
  }
  log.push(msg);
}

function printSystemInfo() {
  var os = require('os');
  var cpuInfo = os.cpus().reduce(function (cpus, cur) {
    var idx = 0;
    cpus.forEach(function (thisCpu) {
      if (thisCpu.model === cur.name) return;
      idx++;
    });
    if (idx !== cpus.length)
      cpus[idx].count++;
    else
      cpus.push({name: cur.model, count: 1});
    return cpus;
  }, []);
  writeLog('## System Information:');
  writeLog(' - ' + os.type());
  writeLog(' - ' + os.release());
  writeLog(' - ' + os.arch());
  cpuInfo.forEach(function (cpu) {
    writeLog(' - ' + cpu.name + ' × ' + cpu.count);
  });
  writeLog('## Node information');
  writeLog(' - Node.js: ' + exec('node -v').stdout.trim());
  writeLog(' - V8: ' + process.versions.v8);
  writeLog();
  writeLog('## Shell Information:');
  writeLog(' - name: `' + exec('bash -c \'echo ${SHELL}\'', {silent: true}).stdout.trim() + '`');
  writeLog(' - version: ' + exec('bash --version', {silent: true}).stdout.replace(/\n+/g, '\n'));
}

var versions = ls(__dirname + '/shelljs/');

cd(__dirname + '/' + TEST_DIR);
var prefix;
var shellJSWins = [];
printSystemInfo();

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
  shell_output = exec('bash ' + shfile).stdout;
  end_time = new Date().getTime();
  shell_time = end_time - start_time;
  writeLog(' - [Bash] took `' + shell_time + '` milliseconds', prefix + '/' + shfile);

  var minimumVersion = test('-f', VERSION_FILE) ? cat(VERSION_FILE).trim() : '0.0.0';
  versions.forEach(function (version) {
    if (versionCmp(version, minimumVersion) < 0) {
      writeLog(' - Skipping test for ShellJS '+version);
      return;
    }
    var cmd = 'node ' + jsfile + ' ../../shelljs/' +
      (version === 'latest' ? 'latest/global' : version);
    start_time = new Date().getTime();
    js_output = exec(cmd).stdout;
    end_time = new Date().getTime();
    js_time = end_time - start_time;
    writeLog(' - [ShellJS '+version+'] took `' + js_time + '` milliseconds', prefix + '/' + jsfile);
    if (shell_output !== js_output) {
      writeLog('Output differs');
    }
  });

  if (shell_time < js_time) {
    writeLog('Bash was `' + (js_time/shell_time).toFixed(3) + '` times faster than ShellJS');
  } else {
    writeLog('ShellJS was `' + (shell_time/js_time).toFixed(3) + '` times faster than Bash');
    shellJSWins.push(dir);
  }

  // Clean up
  echo('=======================');
  echo();
  config.silent = false;
  cd('..')
  // exit(7); // DEBUG: fix this
});

if (shouldLog) {
  cd(__dirname);
  var text = '### ShellJS performance wins\n\n';
  text += shellJSWins.map(x => ' - [' + x + '](' + TEST_DIR + '/' + x + ')').join('\n');
  text += '\n\n' + log.join('\n\n');

  // Wipe out the old results
  cat(markdownFile).replace(/## Results(.|\n)*/, '## Results').to(markdownFile);

  // Append new docs to markdown file
  sed('-i', /## Results/, '## Results\n\n' + text, markdownFile);
}
