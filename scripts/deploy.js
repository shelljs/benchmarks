#!/usr/bin/env node
require('../shelljs/0.6.0');

// Deploy to Github pages
// This script is typically run by the CI
// GH_TOKEN must be an environmental variable

var markdownFile = __dirname + '/index.md';

set('-e');
if (env.GH_TOKEN) {
  console.log('Compiling markdown to HTML');

  exec('pandoc index.md -f markdown -t html -s -o index.html');

  console.log('Deploying to Github pages');

  exec('git config user.name "Travis CI"');
  exec('git config user.email "ntfschr@gmail.com"');

  exec('git add .');
  exec('git commit -m "Deploy to Github pages"');
  var ret = exec('git push --force --quiet "https://${GH_TOKEN}@github.com/shelljs/benchmarks.git" gh-pages').code;
  if (ret === 0) {
    console.log('Successfully deployed!');
  } else {
    console.error('Error deploying to Github pages');
  }
  exit(ret);
} else {
  console.error('Error: GH_TOKEN must be in the current environment');
  exit(1);
}
