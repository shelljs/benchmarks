require(process.argv[2]);
for (var k=0; k<10000; k++)
  echo(ls().join('\n'));
