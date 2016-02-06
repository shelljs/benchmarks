require('shelljs/global');
for (var k=0; k<1000; k++) {
  'sometext\n'.to('testfile');
  rm('testfile');
}
