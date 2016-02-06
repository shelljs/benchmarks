require('shelljs/global');
for (var k=0; k<1000; k++) {
  touch('testfile');
  rm('testfile');
}
