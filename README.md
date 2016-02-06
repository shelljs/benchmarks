# ShellJSBench
Collection of benchmarks for ShellJS

These benchmarks aim to compare shelljs performance to that of bash, sh, and zsh.
It works by running shell utilities and timing the speed of completion for each 
tested utility.

This will comprise every shell utility ShellJS supports.

## Results

### [echoIntoFile](scripts/echoIntoFile)

 - [ShellJS](scripts/echoIntoFile/echoIntoFile.js) took `271` milliseconds

 - [Bash](scripts/echoIntoFile/echoIntoFile.sh) took `871` milliseconds

ShellJS was `3.214` times faster than Bash

### [envVariable](scripts/envVariable)

 - [ShellJS](scripts/envVariable/envVar.js) took `1237` milliseconds

 - [Bash](scripts/envVariable/envVar.sh) took `1178` milliseconds

Bash was `1.050` times faster than ShellJS

### [forLoopAlternateSyntax](scripts/forLoopAlternateSyntax)

 - [ShellJS](scripts/forLoopAlternateSyntax/helloworld10k.js) took `180` milliseconds

 - [Bash](scripts/forLoopAlternateSyntax/helloworld10k.sh) took `97` milliseconds

Bash was `1.856` times faster than ShellJS

### [helloworld](scripts/helloworld)

 - [ShellJS](scripts/helloworld/helloworld.js) took `159` milliseconds

 - [Bash](scripts/helloworld/helloworld.sh) took `83` milliseconds

Bash was `1.916` times faster than ShellJS

### [helloworld10k](scripts/helloworld10k)

 - [ShellJS](scripts/helloworld10k/helloworld10k.js) took `293` milliseconds

 - [Bash](scripts/helloworld10k/helloworld10k.sh) took `168` milliseconds

Bash was `1.744` times faster than ShellJS

### [ls10k](scripts/ls10k)

 - [ShellJS](scripts/ls10k/ls10k.js) took `827` milliseconds

 - [Bash](scripts/ls10k/ls10k.sh) took `9679` milliseconds

ShellJS was `11.704` times faster than Bash

### [pwd10k](scripts/pwd10k)

 - [ShellJS](scripts/pwd10k/path10k.js) took `2072` milliseconds

 - [Bash](scripts/pwd10k/path10k.sh) took `679` milliseconds

Bash was `3.052` times faster than ShellJS

### [touchSyntax06](scripts/touchSyntax06)

 - [ShellJS](scripts/touchSyntax06/touchrm10k.js) took `293` milliseconds

 - [Bash](scripts/touchSyntax06/touchrm10k.sh) took `1447` milliseconds

ShellJS was `4.939` times faster than Bash