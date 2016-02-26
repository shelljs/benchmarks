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

 - [Bash](test/echoIntoFile/echoIntoFile.sh) took `836` milliseconds

 - [ShellJS 0.5.3](test/echoIntoFile/echoIntoFile.js) took `251` milliseconds

 - [ShellJS 0.6.0](test/echoIntoFile/echoIntoFile.js) took `306` milliseconds

 - [ShellJS latest](test/echoIntoFile/echoIntoFile.js) took `187` milliseconds

ShellJS was `4.471` times faster than Bash

### [envVariable](test/envVariable)

 - [Bash](test/envVariable/envVar.sh) took `220` milliseconds

 - [ShellJS 0.5.3](test/envVariable/envVar.js) took `288` milliseconds

 - [ShellJS 0.6.0](test/envVariable/envVar.js) took `302` milliseconds

 - [ShellJS latest](test/envVariable/envVar.js) took `566` milliseconds

Bash was `2.573` times faster than ShellJS

### [forLoopAlternateSyntax](test/forLoopAlternateSyntax)

 - [Bash](test/forLoopAlternateSyntax/helloworld10k.sh) took `89` milliseconds

 - [ShellJS 0.5.3](test/forLoopAlternateSyntax/helloworld10k.js) took `190` milliseconds

 - [ShellJS 0.6.0](test/forLoopAlternateSyntax/helloworld10k.js) took `179` milliseconds

 - [ShellJS latest](test/forLoopAlternateSyntax/helloworld10k.js) took `224` milliseconds

Bash was `2.517` times faster than ShellJS

### [helloworld](test/helloworld)

 - [Bash](test/helloworld/helloworld.sh) took `85` milliseconds

 - [ShellJS 0.5.3](test/helloworld/helloworld.js) took `171` milliseconds

 - [ShellJS 0.6.0](test/helloworld/helloworld.js) took `172` milliseconds

 - [ShellJS latest](test/helloworld/helloworld.js) took `179` milliseconds

Bash was `2.106` times faster than ShellJS

### [helloworld10k](test/helloworld10k)

 - [Bash](test/helloworld10k/helloworld10k.sh) took `162` milliseconds

 - [ShellJS 0.5.3](test/helloworld10k/helloworld10k.js) took `256` milliseconds

 - [ShellJS 0.6.0](test/helloworld10k/helloworld10k.js) took `296` milliseconds

 - [ShellJS latest](test/helloworld10k/helloworld10k.js) took `598` milliseconds

Bash was `3.691` times faster than ShellJS

### [ls10k](test/ls10k)

 - [Bash](test/ls10k/ls10k.sh) took `11441` milliseconds

 - [ShellJS 0.5.3](test/ls10k/ls10k.js) took `796` milliseconds

 - [ShellJS 0.6.0](test/ls10k/ls10k.js) took `785` milliseconds

 - [ShellJS latest](test/ls10k/ls10k.js) took `1091` milliseconds

ShellJS was `10.487` times faster than Bash

### [pwd10k](test/pwd10k)

 - [Bash](test/pwd10k/path10k.sh) took `882` milliseconds

 - [ShellJS 0.5.3](test/pwd10k/path10k.js) took `1902` milliseconds

 - [ShellJS 0.6.0](test/pwd10k/path10k.js) took `2128` milliseconds

 - [ShellJS latest](test/pwd10k/path10k.js) took `6090` milliseconds

Bash was `6.905` times faster than ShellJS

### [touchSyntax0.6](test/touchSyntax0.6)

 - [Bash](test/touchSyntax0.6/touchrm10k.sh) took `1423` milliseconds

 - Skipping test for ShellJS 0.5.3

 - [ShellJS 0.6.0](test/touchSyntax0.6/touchrm10k.js) took `274` milliseconds

 - [ShellJS latest](test/touchSyntax0.6/touchrm10k.js) took `487` milliseconds

ShellJS was `2.922` times faster than Bash