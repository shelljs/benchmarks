# ShellJS Benchmarks

[![Build Status](https://travis-ci.org/shelljs/benchmarks.svg?branch=master)](https://travis-ci.org/shelljs/benchmarks)

Collection of benchmarks for ShellJS

This is a comparison of [ShellJS]() and bash for performance. Each test case
runs scripts with equivalent output and compares Bash's runtime with ShellJS's.
Surprisingly, ShellJS is often the winner, sometimes being up to **12x faster**!
Woohoo! See below for [ShellJS performance wins](#shelljs-performance-wins).

## Results

### ShellJS performance wins

 - [echoIntoFile](test/echoIntoFile)
 - [ls10k](test/ls10k)
 - [touchSyntax0.6](test/touchSyntax0.6)

## System Information:

 - Linux

 - 4.2.0-30-generic

 - x64

 - Intel(R) Core(TM) i5-3317U CPU @ 1.70GHz × 4

## Node information

 - Node.js: v5.3.0

 - V8: 4.6.85.31



## Shell Information:

 - name: `/bin/bash`

 - version: GNU bash, version 4.3.42(1)-release (x86_64-pc-linux-gnu)
Copyright (C) 2013 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software; you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.


### [echoIntoFile](test/echoIntoFile)

 - [Bash](test/echoIntoFile/echoIntoFile.sh) took `780` milliseconds

 - [ShellJS 0.5.3](test/echoIntoFile/echoIntoFile.js) took `284` milliseconds

 - [ShellJS 0.6.0](test/echoIntoFile/echoIntoFile.js) took `270` milliseconds

 - [ShellJS latest](test/echoIntoFile/echoIntoFile.js) took `174` milliseconds

ShellJS was `4.483` times faster than Bash

### [envVariable](test/envVariable)

 - [Bash](test/envVariable/envVar.sh) took `223` milliseconds

 - [ShellJS 0.5.3](test/envVariable/envVar.js) took `409` milliseconds

 - [ShellJS 0.6.0](test/envVariable/envVar.js) took `295` milliseconds

 - [ShellJS latest](test/envVariable/envVar.js) took `823` milliseconds

Bash was `3.691` times faster than ShellJS

### [forLoopAlternateSyntax](test/forLoopAlternateSyntax)

 - [Bash](test/forLoopAlternateSyntax/helloworld10k.sh) took `98` milliseconds

 - [ShellJS 0.5.3](test/forLoopAlternateSyntax/helloworld10k.js) took `176` milliseconds

 - [ShellJS 0.6.0](test/forLoopAlternateSyntax/helloworld10k.js) took `184` milliseconds

 - [ShellJS latest](test/forLoopAlternateSyntax/helloworld10k.js) took `223` milliseconds

Bash was `2.276` times faster than ShellJS

### [helloworld](test/helloworld)

 - [Bash](test/helloworld/helloworld.sh) took `85` milliseconds

 - [ShellJS 0.5.3](test/helloworld/helloworld.js) took `171` milliseconds

 - [ShellJS 0.6.0](test/helloworld/helloworld.js) took `187` milliseconds

 - [ShellJS latest](test/helloworld/helloworld.js) took `183` milliseconds

Bash was `2.153` times faster than ShellJS

### [helloworld10k](test/helloworld10k)

 - [Bash](test/helloworld10k/helloworld10k.sh) took `163` milliseconds

 - [ShellJS 0.5.3](test/helloworld10k/helloworld10k.js) took `261` milliseconds

 - [ShellJS 0.6.0](test/helloworld10k/helloworld10k.js) took `284` milliseconds

 - [ShellJS latest](test/helloworld10k/helloworld10k.js) took `788` milliseconds

Bash was `4.834` times faster than ShellJS

### [ls10k](test/ls10k)

 - [Bash](test/ls10k/ls10k.sh) took `10345` milliseconds

 - [ShellJS 0.5.3](test/ls10k/ls10k.js) took `684` milliseconds

 - [ShellJS 0.6.0](test/ls10k/ls10k.js) took `908` milliseconds

 - [ShellJS latest](test/ls10k/ls10k.js) took `1107` milliseconds

ShellJS was `9.345` times faster than Bash

### [pwd10k](test/pwd10k)

 - [Bash](test/pwd10k/path10k.sh) took `917` milliseconds

 - [ShellJS 0.5.3](test/pwd10k/path10k.js) took `1312` milliseconds

 - [ShellJS 0.6.0](test/pwd10k/path10k.js) took `1911` milliseconds

 - [ShellJS latest](test/pwd10k/path10k.js) took `4158` milliseconds

Bash was `4.534` times faster than ShellJS

### [touchSyntax0.6](test/touchSyntax0.6)

 - [Bash](test/touchSyntax0.6/touchrm10k.sh) took `1486` milliseconds

 - Skipping test for ShellJS 0.5.3

 - [ShellJS 0.6.0](test/touchSyntax0.6/touchrm10k.js) took `307` milliseconds

 - [ShellJS latest](test/touchSyntax0.6/touchrm10k.js) took `468` milliseconds

ShellJS was `3.175` times faster than Bash