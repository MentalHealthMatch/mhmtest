#!/bin/sh

OS=$(uname)
Processor=$(uname -p)

HERE=$(pwd)

PATH=""
PATH=/bin
PATH=$PATH:/sbin
PATH=$PATH:/usr/bin
PATH=$PATH:/usr/sbin

# PATH=$PATH:/usr/local/bin
# PATH=$PATH:/usr/local/sbin

if [ "$OS" == "Darwin" ]; then
    PATH=$PATH:$HERE/Boards/Darwin-i386/node-v12.19.0-darwin-x64/bin
    alias heroku='$HERE/Boards/Darwin-i386/heroku/bin/heroku'
elif [ "$OS" == "Linux" ] && [ "$Processor" == "x86_64" ]; then
    PATH=$PATH:$HERE/Boards/Linux-x86_64/node-v12.19.0-linux-x64/bin
fi

PATH=$PATH:$HERE/Sustains/yarn-v1.22.5/bin
PATH=$PATH:$HERE/node_modules/.bin

echo $PATH
