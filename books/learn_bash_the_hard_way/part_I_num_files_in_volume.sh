#!/usr/bin/env bash

# check num of parameters
if [[ $# -ne 2 ]]
then
    echo "Usage: numfileguess <guess> <path_to_directory>"
fi

GUESS=$1
GIVEN_PATH=$2

NUM_OF_FILES=$(find "$GIVEN_PATH" -type f -maxdepth 1 -print | wc -l)

if [[ $NUM_OF_FILES -eq $GUESS ]]
then
    echo "Correct guess!"
else
    echo "Incorrect guess: correct number was $NUM_OF_FILES"
    exit 1
fi
