# ShellJS Benchmarks

Collection of benchmarks for ShellJS

This is a comparison of [ShellJS]() and bash for performance. Each test case
runs scripts with equivalent output and compares Bash's runtime with ShellJS's.
Surprisingly, ShellJS is often the winner, sometimes being up to **12x faster**!
Woohoo! See below for [ShellJS performance wins](#shelljs-performance-wins).

## Results

### ShellJS performance wins

 - [echoIntoFile](scripts/echoIntoFile)
 - [envVariable](scripts/envVariable)
 - [ls10k](scripts/ls10k)
 - [touchSyntax06](scripts/touchSyntax06)

## System Information:

 - Linux

 - 4.2.0-30-generic

 - x64

 - Intel(R) Core(TM) i5-3317U CPU @ 1.70GHz x 4

## Node information

 - Node.js v5.3.0

 - V8 4.6.85.31



## Shell Information:

 - /bin/bash


 - GNU bash, version 4.3.42(1)-release (x86_64-pc-linux-gnu)
Copyright (C) 2013 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software; you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.


### [echoIntoFile](scripts/echoIntoFile)

 - [ShellJS](scripts/echoIntoFile/echoIntoFile.js) took `257` milliseconds

 - [Bash](scripts/echoIntoFile/echoIntoFile.sh) took `832` milliseconds

ShellJS was `3.237` times faster than Bash

### [envVariable](scripts/envVariable)

 - [ShellJS](scripts/envVariable/envVar.js) took `1164` milliseconds

 - [Bash](scripts/envVariable/envVar.sh) took `1451` milliseconds

ShellJS was `1.247` times faster than Bash

### [forLoopAlternateSyntax](scripts/forLoopAlternateSyntax)

 - [ShellJS](scripts/forLoopAlternateSyntax/helloworld10k.js) took `184` milliseconds

 - [Bash](scripts/forLoopAlternateSyntax/helloworld10k.sh) took `92` milliseconds

Bash was `2.000` times faster than ShellJS

### [helloworld](scripts/helloworld)

 - [ShellJS](scripts/helloworld/helloworld.js) took `178` milliseconds

 - [Bash](scripts/helloworld/helloworld.sh) took `83` milliseconds

Bash was `2.145` times faster than ShellJS

### [helloworld10k](scripts/helloworld10k)

 - [ShellJS](scripts/helloworld10k/helloworld10k.js) took `288` milliseconds

 - [Bash](scripts/helloworld10k/helloworld10k.sh) took `217` milliseconds

Bash was `1.327` times faster than ShellJS

### [ls10k](scripts/ls10k)

 - [ShellJS](scripts/ls10k/ls10k.js) took `743` milliseconds

 - [Bash](scripts/ls10k/ls10k.sh) took `10145` milliseconds

ShellJS was `13.654` times faster than Bash

### [pwd10k](scripts/pwd10k)

 - [ShellJS](scripts/pwd10k/path10k.js) took `2039` milliseconds

 - [Bash](scripts/pwd10k/path10k.sh) took `740` milliseconds

Bash was `2.755` times faster than ShellJS

### [touchSyntax06](scripts/touchSyntax06)

 - [ShellJS](scripts/touchSyntax06/touchrm10k.js) took `322` milliseconds

 - [Bash](scripts/touchSyntax06/touchrm10k.sh) took `1565` milliseconds

ShellJS was `4.860` times faster than Bash
