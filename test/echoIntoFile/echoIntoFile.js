require(process.argv[2]);
for (var k=0; k<1000; k++) {
  'sometext\n'.to('testfile');
  rm('testfile');
}
