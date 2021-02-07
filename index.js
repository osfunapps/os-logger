const self = module.exports = {

    /**
     * To use, call attachedLogFilePath(filePath)
     */
    attachedLogStream: false,

    /**
     * Attach a log file so all printed text to console will also be written to a file
     */
    attachLogFile: function (filePath) {
        return new Promise(function (resolve, reject) {
            let fs = require('fs')
            self.attachedLogStream = fs.createWriteStream(filePath, {flags: 'a'});
            resolve()
        })
    },

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
     * Will print an error message
     */
    error: function (txt) {
        print(ERROR, txt)
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
                stdin.removeAllListeners('data')
                stdin.removeAllListeners('error')
                resolve(data.toString().trim());
            });
            stdin.on('error', err => reject(err));
        })
    },

    /**
     * Will write to a log file
     */
    appendToLogFile: function (text) {
        appendToLogFile(text)
    },

};

function print(col, txt) {
    if (self.attachedLogStream !== false) {
        appendToLogFile(`${txt}\n`)
    }
    console.log(`${col}${txt}`)
}

function appendToLogFile(text) {
    self.attachedLogStream.write(text)
}

// color indications
let REQUEST = '\033[34;4m';
let SUCCESS = '\033[32;1m';
let WARNING = '\033[93m';
let ERROR = '\033[31;1m';
let BOLD = '\033[1m';
let UNDERLINE = '\033[4m';
let INFO = '\033[37m';