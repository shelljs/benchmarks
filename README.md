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

 - [Bash](test/echoIntoFile/echoIntoFile.sh) took `842` milliseconds

 - [ShellJS 0.5.3](test/echoIntoFile/echoIntoFile.js) took `252` milliseconds

 - [ShellJS 0.6.0](test/echoIntoFile/echoIntoFile.js) took `270` milliseconds

 - [ShellJS latest](test/echoIntoFile/echoIntoFile.js) took `178` milliseconds

ShellJS was `4.730` times faster than Bash

### [envVariable](test/envVariable)

 - [Bash](test/envVariable/envVar.sh) took `314` milliseconds

 - [ShellJS 0.5.3](test/envVariable/envVar.js) took `281` milliseconds

 - [ShellJS 0.6.0](test/envVariable/envVar.js) took `293` milliseconds

 - [ShellJS latest](test/envVariable/envVar.js) took `618` milliseconds

Bash was `1.968` times faster than ShellJS

### [forLoopAlternateSyntax](test/forLoopAlternateSyntax)

 - [Bash](test/forLoopAlternateSyntax/helloworld10k.sh) took `91` milliseconds

 - [ShellJS 0.5.3](test/forLoopAlternateSyntax/helloworld10k.js) took `184` milliseconds

 - [ShellJS 0.6.0](test/forLoopAlternateSyntax/helloworld10k.js) took `185` milliseconds

 - [ShellJS latest](test/forLoopAlternateSyntax/helloworld10k.js) took `235` milliseconds

Bash was `2.582` times faster than ShellJS

### [helloworld](test/helloworld)

 - [Bash](test/helloworld/helloworld.sh) took `84` milliseconds

 - [ShellJS 0.5.3](test/helloworld/helloworld.js) took `195` milliseconds

 - [ShellJS 0.6.0](test/helloworld/helloworld.js) took `175` milliseconds

 - [ShellJS latest](test/helloworld/helloworld.js) took `175` milliseconds

Bash was `2.083` times faster than ShellJS

### [helloworld10k](test/helloworld10k)

 - [Bash](test/helloworld10k/helloworld10k.sh) took `208` milliseconds

 - [ShellJS 0.5.3](test/helloworld10k/helloworld10k.js) took `326` milliseconds

 - [ShellJS 0.6.0](test/helloworld10k/helloworld10k.js) took `264` milliseconds

 - [ShellJS latest](test/helloworld10k/helloworld10k.js) took `760` milliseconds

Bash was `3.654` times faster than ShellJS

### [ls10k](test/ls10k)

 - [Bash](test/ls10k/ls10k.sh) took `10334` milliseconds

 - [ShellJS 0.5.3](test/ls10k/ls10k.js) took `690` milliseconds

 - [ShellJS 0.6.0](test/ls10k/ls10k.js) took `748` milliseconds

 - [ShellJS latest](test/ls10k/ls10k.js) took `1115` milliseconds

ShellJS was `9.268` times faster than Bash

### [pwd10k](test/pwd10k)

 - [Bash](test/pwd10k/path10k.sh) took `632` milliseconds

 - [ShellJS 0.5.3](test/pwd10k/path10k.js) took `1625` milliseconds

 - [ShellJS 0.6.0](test/pwd10k/path10k.js) took `2343` milliseconds

 - [ShellJS latest](test/pwd10k/path10k.js) took `6133` milliseconds

Bash was `9.704` times faster than ShellJS

### [touchSyntax0.6](test/touchSyntax0.6)

 - [Bash](test/touchSyntax0.6/touchrm10k.sh) took `1392` milliseconds

 - Skipping test for ShellJS 0.5.3

 - [ShellJS 0.6.0](test/touchSyntax0.6/touchrm10k.js) took `270` milliseconds

 - [ShellJS latest](test/touchSyntax0.6/touchrm10k.js) took `465` milliseconds

ShellJS was `2.994` times faster than Bash