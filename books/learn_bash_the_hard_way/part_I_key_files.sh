#!/usr/bin/env bash


# check for cd
if [ $(which cd) = '/usr/bin/cd' ]
then
   echo "cd is in right place"
else
   echo "cd isn't in right place"
fi
