#!/bin/bash
for k in `seq 1000`; do
  touch testfile
  rm testfile
done
