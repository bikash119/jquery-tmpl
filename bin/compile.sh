#!/bin/sh
alias js="\
    java -cp lib/js.jar:lib/jline.jar \
    jline.ConsoleRunner org.mozilla.javascript.tools.shell.Main -opt -1"
    
js bin/shell.js $1
