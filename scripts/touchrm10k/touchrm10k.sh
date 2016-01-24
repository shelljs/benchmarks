#!/bin/bash
for k in `seq 10000`; do
  echo -en "sometext\n" > testfile
  rm testfile
done
