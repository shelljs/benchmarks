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

 - [Bash](test/echoIntoFile/echoIntoFile.sh) took `879` milliseconds

 - [ShellJS 0.5.3](test/echoIntoFile/echoIntoFile.js) took `264` milliseconds

 - [ShellJS 0.6.0](test/echoIntoFile/echoIntoFile.js) took `273` milliseconds

 - [ShellJS latest](test/echoIntoFile/echoIntoFile.js) took `180` milliseconds

ShellJS was `4.883` times faster than Bash

### [envVariable](test/envVariable)

 - [Bash](test/envVariable/envVar.sh) took `217` milliseconds

 - [ShellJS 0.5.3](test/envVariable/envVar.js) took `360` milliseconds

 - [ShellJS 0.6.0](test/envVariable/envVar.js) took `352` milliseconds

 - [ShellJS latest](test/envVariable/envVar.js) took `573` milliseconds

Bash was `2.641` times faster than ShellJS

### [forLoopAlternateSyntax](test/forLoopAlternateSyntax)

 - [Bash](test/forLoopAlternateSyntax/helloworld10k.sh) took `89` milliseconds

 - [ShellJS 0.5.3](test/forLoopAlternateSyntax/helloworld10k.js) took `181` milliseconds

 - [ShellJS 0.6.0](test/forLoopAlternateSyntax/helloworld10k.js) took `182` milliseconds

 - [ShellJS latest](test/forLoopAlternateSyntax/helloworld10k.js) took `225` milliseconds

Bash was `2.528` times faster than ShellJS

### [helloworld](test/helloworld)

 - [Bash](test/helloworld/helloworld.sh) took `83` milliseconds

 - [ShellJS 0.5.3](test/helloworld/helloworld.js) took `170` milliseconds

 - [ShellJS 0.6.0](test/helloworld/helloworld.js) took `166` milliseconds

 - [ShellJS latest](test/helloworld/helloworld.js) took `178` milliseconds

Bash was `2.145` times faster than ShellJS

### [helloworld10k](test/helloworld10k)

 - [Bash](test/helloworld10k/helloworld10k.sh) took `166` milliseconds

 - [ShellJS 0.5.3](test/helloworld10k/helloworld10k.js) took `260` milliseconds

 - [ShellJS 0.6.0](test/helloworld10k/helloworld10k.js) took `290` milliseconds

 - [ShellJS latest](test/helloworld10k/helloworld10k.js) took `566` milliseconds

Bash was `3.410` times faster than ShellJS

### [ls10k](test/ls10k)

 - [Bash](test/ls10k/ls10k.sh) took `10187` milliseconds

 - [ShellJS 0.5.3](test/ls10k/ls10k.js) took `753` milliseconds

 - [ShellJS 0.6.0](test/ls10k/ls10k.js) took `745` milliseconds

 - [ShellJS latest](test/ls10k/ls10k.js) took `1148` milliseconds

ShellJS was `8.874` times faster than Bash

### [pwd10k](test/pwd10k)

 - [Bash](test/pwd10k/path10k.sh) took `920` milliseconds

 - [ShellJS 0.5.3](test/pwd10k/path10k.js) took `1703` milliseconds

 - [ShellJS 0.6.0](test/pwd10k/path10k.js) took `2221` milliseconds

 - [ShellJS latest](test/pwd10k/path10k.js) took `4997` milliseconds

Bash was `5.432` times faster than ShellJS

### [touchSyntax0.6](test/touchSyntax0.6)

 - [Bash](test/touchSyntax0.6/touchrm10k.sh) took `1451` milliseconds

 - Skipping test for ShellJS 0.5.3

 - [ShellJS 0.6.0](test/touchSyntax0.6/touchrm10k.js) took `313` milliseconds

 - [ShellJS latest](test/touchSyntax0.6/touchrm10k.js) took `491` milliseconds

ShellJS was `2.955` times faster than Bash