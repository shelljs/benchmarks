# ShellJSBench
Collection of benchmarks for ShellJS

These benchmarks aim to compare shelljs performance to that of bash, sh, and zsh.
It works by running shell utilities and timing the speed of completion for each 
tested utility.

This will comprise every shell utility ShellJS supports.

## Results

### ShellJS performance wins

 - [echoIntoFile](scripts/echoIntoFile)
 - [envVariable](scripts/envVariable)
 - [ls10k](scripts/ls10k)
 - [touchSyntax06](scripts/touchSyntax06)

### [echoIntoFile](scripts/echoIntoFile)

 - [ShellJS](scripts/echoIntoFile/echoIntoFile.js) took `199` milliseconds

 - [Bash](scripts/echoIntoFile/echoIntoFile.sh) took `430` milliseconds

ShellJS was `2.161` times faster than Bash

### [envVariable](scripts/envVariable)

 - [ShellJS](scripts/envVariable/envVar.js) took `723` milliseconds

 - [Bash](scripts/envVariable/envVar.sh) took `723` milliseconds

ShellJS was `1.000` times faster than Bash

### [forLoopAlternateSyntax](scripts/forLoopAlternateSyntax)

 - [ShellJS](scripts/forLoopAlternateSyntax/helloworld10k.js) took `112` milliseconds

 - [Bash](scripts/forLoopAlternateSyntax/helloworld10k.sh) took `76` milliseconds

Bash was `1.474` times faster than ShellJS

### [helloworld](scripts/helloworld)

 - [ShellJS](scripts/helloworld/helloworld.js) took `110` milliseconds

 - [Bash](scripts/helloworld/helloworld.sh) took `60` milliseconds

Bash was `1.833` times faster than ShellJS

### [helloworld10k](scripts/helloworld10k)

 - [ShellJS](scripts/helloworld10k/helloworld10k.js) took `170` milliseconds

 - [Bash](scripts/helloworld10k/helloworld10k.sh) took `94` milliseconds

Bash was `1.809` times faster than ShellJS

### [ls10k](scripts/ls10k)

 - [ShellJS](scripts/ls10k/ls10k.js) took `447` milliseconds

 - [Bash](scripts/ls10k/ls10k.sh) took `3714` milliseconds

ShellJS was `8.309` times faster than Bash

### [pwd10k](scripts/pwd10k)

 - [ShellJS](scripts/pwd10k/path10k.js) took `1103` milliseconds

 - [Bash](scripts/pwd10k/path10k.sh) took `329` milliseconds

Bash was `3.353` times faster than ShellJS

### [touchSyntax06](scripts/touchSyntax06)

 - [ShellJS](scripts/touchSyntax06/touchrm10k.js) took `172` milliseconds

 - [Bash](scripts/touchSyntax06/touchrm10k.sh) took `730` milliseconds

ShellJS was `4.244` times faster than Bash