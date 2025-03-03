#!/usr/bin/env bash

getopts "f:" opt

n=0
case "$opt" in
    f) 
        while [[ n -lt 10 ]]
        do 
            if [[ -f ${OPTARG} ]]
            then 
                echo "file found!"
                exit 0
            fi
            sleep 2
            (( n++ ))
        done
        echo "file: ${OPTARG} not found :(";;
    *)
        echo "no arguments given"
esac

exit 1

