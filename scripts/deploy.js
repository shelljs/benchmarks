#!/usr/bin/env node
require('../shelljs/0.6.0');

// Deploy to Github pages
// This script is typically run by the CI
// GH_TOKEN must be an environmental variable

set('-e');
if (env.GH_TOKEN) {
  console.log('Deploying to Github pages');
  exec('git config user.name "Travis CI"');
  exec('git config user.email "ntfschr@gmail.com"');
  exec('git fetch origin gh-pages:gh-pages');
  exec('git add .');
  exec('git checkout gh-pages');
  exec('git commit -m "Deploy to Github pages"');
  var ret = exec('git push --force --quiet "https://${GH_TOKEN}@github.com/shelljs/benchmarks.git" gh-pages').code;
  if (ret === 0) {
    console.log('Successfully deployed!');
  } else {
    console.error('Error deploying to Github pages');
  }
  exec('git checkout -'); // back to previous branch
  exit(ret);
} else {
  console.error('Error: GH_TOKEN must be in the current environment');
  exit(1);
}
