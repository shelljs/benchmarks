# ShellJSBench
Collection of benchmarks for ShellJS

These benchmarks aim to compare shelljs performance to that of bash, sh, and zsh.
It works by running shell utilities and timing the speed of completion for each 
tested utility.

This will comprise every shell utility ShellJS supports.

## Results

### [echoIntoFile](scripts/echoIntoFile)

 - [ShellJS](scripts/echoIntoFile/echoIntoFile.js) took `185` milliseconds

 - [Bash](scripts/echoIntoFile/echoIntoFile.sh) took `423` milliseconds

ShellJS was `2.286` times faster than Bash

### [envVariable](scripts/envVariable)

 - [ShellJS](scripts/envVariable/envVar.js) took `690` milliseconds

 - [Bash](scripts/envVariable/envVar.sh) took `709` milliseconds

ShellJS was `1.028` times faster than Bash

### [forLoopAlternateSyntax](scripts/forLoopAlternateSyntax)

 - [ShellJS](scripts/forLoopAlternateSyntax/helloworld10k.js) took `111` milliseconds

 - [Bash](scripts/forLoopAlternateSyntax/helloworld10k.sh) took `58` milliseconds

Bash was `1.914` times faster than ShellJS

### [helloworld](scripts/helloworld)

 - [ShellJS](scripts/helloworld/helloworld.js) took `104` milliseconds

 - [Bash](scripts/helloworld/helloworld.sh) took `68` milliseconds

Bash was `1.529` times faster than ShellJS

### [helloworld10k](scripts/helloworld10k)

 - [ShellJS](scripts/helloworld10k/helloworld10k.js) took `178` milliseconds

 - [Bash](scripts/helloworld10k/helloworld10k.sh) took `93` milliseconds

Bash was `1.914` times faster than ShellJS

### [ls10k](scripts/ls10k)

 - [ShellJS](scripts/ls10k/ls10k.js) took `389` milliseconds

 - [Bash](scripts/ls10k/ls10k.sh) took `3715` milliseconds

ShellJS was `9.550` times faster than Bash

### [pwd10k](scripts/pwd10k)

 - [ShellJS](scripts/pwd10k/path10k.js) took `903` milliseconds

 - [Bash](scripts/pwd10k/path10k.sh) took `332` milliseconds

Bash was `2.720` times faster than ShellJS

### [touchSyntax06](scripts/touchSyntax06)

 - [ShellJS](scripts/touchSyntax06/touchrm10k.js) took `129` milliseconds

 - [Bash](scripts/touchSyntax06/touchrm10k.sh) took `782` milliseconds

ShellJS was `6.062` times faster than Bash

Output differs