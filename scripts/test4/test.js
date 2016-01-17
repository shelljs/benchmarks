require('shelljs/global');
for (var k=0; k<10000; k++)
  echo(ls().join('\n'));
