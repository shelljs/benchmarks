#!/bin/bash
for k in `seq 1000`; do
  echo -en "sometext\n" > testfile
  rm testfile
done
