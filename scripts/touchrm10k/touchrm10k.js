require('shelljs/global');
for (var k=0; k<10000; k++) {
  'sometext\n'.to('testfile');
  rm('testfile');
}
