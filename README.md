Introduction
------------

This module contains nodejs print operations

## Installation
Install via npm:
    
    npm i os-logger


## Usage       
Require logger:
```js  
var logger = require("os-logger")
```
## Functions and signatures:
```js
/**
 * Will print a warning message
 */
warning: function (txt) {
    print(WARNING, txt)
},

/**
 * Will print a bold message
 */
bold: function (txt) {
    print(BOLD, txt)
},

/**
 * Will print an underline message
 */
underline: function (txt) {
    print(UNDERLINE, txt)
},

/**
 * Will print a failed message
 */
failure: function (txt) {
    print(FAILURE, txt)
},

/**
 * Will print a success message
 */
success: function (txt) {
    print(SUCCESS, txt)
},


/**
 * Will print an info message
 */
info: function (txt) {
    print(INFO, txt)
},

/**
 * Will request an input from the user
 */
inputRequest: function (text) {
    return new Promise((resolve, reject) => {
        const {stdin, stdout} = process;


        stdin.resume();
        stdout.write(REQUEST + text + "\n");

        stdin.on('data', data => {
            resolve(data.toString().trim());
            stdin.destroy()
        });
        stdin.on('error', err => reject(err));
        stdin.on('end', function(){
            console.log("closed!")
        });
    })
}    
```   

And more...


## Links -> see more tools
* [os-tools-npm](https://github.com/osfunapps/os-tools-npm) -> This module contains fundamental functions to implement in an npm project
* [os-file-handler-npm](https://github.com/osfunapps/os-file-handler-npm) -> This module contains fundamental files manipulation functions to implement in an npm project
* [os-file-stream-handler-npm](https://github.com/osfunapps/os-file-stream-handler-npm) -> This module contains read/write and more advanced operations on files
* [os-xml-handler-npm](https://github.com/osfunapps/os-xml-handler-npm) -> This module will build, read and manipulate an xml file. Other handy stuff is also available, like search for specific nodes

[GitHub - osapps](https://github.com/osfunapps)


## Licence