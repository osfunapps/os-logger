const self = module.exports = {

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
                resolve(data.toString().trim());
                stdin.destroy()
            });
            stdin.on('error', err => reject(err));
            stdin.on('end', function(){
                console.log("closed!")
            });
        })
    }
};

function print(col, txt) {
    console.log(`${col}${txt}`)
}

// color indications
let REQUEST = '\033[34;4m';
let SUCCESS = '\033[32;1m';
let WARNING = '\033[93m';
let ERROR = '\033[31;1m';
let BOLD = '\033[1m';
let UNDERLINE = '\033[4m';
let INFO = '\033[37m';