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

 - [ShellJS 0.5.3](test/echoIntoFile/echoIntoFile.js) took `251` milliseconds

 - [ShellJS 0.6.0](test/echoIntoFile/echoIntoFile.js) took `260` milliseconds

 - [ShellJS latest](test/echoIntoFile/echoIntoFile.js) took `199` milliseconds

ShellJS was `4.231` times faster than Bash

### [envVariable](test/envVariable)

 - [Bash](test/envVariable/envVar.sh) took `333` milliseconds

 - [ShellJS 0.5.3](test/envVariable/envVar.js) took `288` milliseconds

 - [ShellJS 0.6.0](test/envVariable/envVar.js) took `291` milliseconds

 - [ShellJS latest](test/envVariable/envVar.js) took `687` milliseconds

Bash was `2.063` times faster than ShellJS

### [forLoopAlternateSyntax](test/forLoopAlternateSyntax)

 - [Bash](test/forLoopAlternateSyntax/helloworld10k.sh) took `100` milliseconds

 - [ShellJS 0.5.3](test/forLoopAlternateSyntax/helloworld10k.js) took `182` milliseconds

 - [ShellJS 0.6.0](test/forLoopAlternateSyntax/helloworld10k.js) took `178` milliseconds

 - [ShellJS latest](test/forLoopAlternateSyntax/helloworld10k.js) took `221` milliseconds

Bash was `2.210` times faster than ShellJS

### [helloworld](test/helloworld)

 - [Bash](test/helloworld/helloworld.sh) took `84` milliseconds

 - [ShellJS 0.5.3](test/helloworld/helloworld.js) took `161` milliseconds

 - [ShellJS 0.6.0](test/helloworld/helloworld.js) took `170` milliseconds

 - [ShellJS latest](test/helloworld/helloworld.js) took `196` milliseconds

Bash was `2.333` times faster than ShellJS

### [helloworld10k](test/helloworld10k)

 - [Bash](test/helloworld10k/helloworld10k.sh) took `198` milliseconds

 - [ShellJS 0.5.3](test/helloworld10k/helloworld10k.js) took `300` milliseconds

 - [ShellJS 0.6.0](test/helloworld10k/helloworld10k.js) took `261` milliseconds

 - [ShellJS latest](test/helloworld10k/helloworld10k.js) took `537` milliseconds

Bash was `2.712` times faster than ShellJS

### [ls10k](test/ls10k)

 - [Bash](test/ls10k/ls10k.sh) took `13272` milliseconds

 - [ShellJS 0.5.3](test/ls10k/ls10k.js) took `1145` milliseconds

 - [ShellJS 0.6.0](test/ls10k/ls10k.js) took `1313` milliseconds

 - [ShellJS latest](test/ls10k/ls10k.js) took `2348` milliseconds

ShellJS was `5.652` times faster than Bash

### [pwd10k](test/pwd10k)

 - [Bash](test/pwd10k/path10k.sh) took `1259` milliseconds

 - [ShellJS 0.5.3](test/pwd10k/path10k.js) took `1696` milliseconds

 - [ShellJS 0.6.0](test/pwd10k/path10k.js) took `2314` milliseconds

 - [ShellJS latest](test/pwd10k/path10k.js) took `6881` milliseconds

Bash was `5.465` times faster than ShellJS

### [touchSyntax0.6](test/touchSyntax0.6)

 - [Bash](test/touchSyntax0.6/touchrm10k.sh) took `1750` milliseconds

 - Skipping test for ShellJS 0.5.3

 - [ShellJS 0.6.0](test/touchSyntax0.6/touchrm10k.js) took `275` milliseconds

 - [ShellJS latest](test/touchSyntax0.6/touchrm10k.js) took `523` milliseconds

ShellJS was `3.346` times faster than Bash