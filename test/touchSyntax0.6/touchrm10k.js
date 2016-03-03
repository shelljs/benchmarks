require(process.argv[2]);
for (var k=0; k<1000; k++) {
  touch('testfile');
  rm('testfile');
}
