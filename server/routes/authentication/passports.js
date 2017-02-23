
//credentials = require("./socialCredentials")

module.exports = function(passport){

        require("./local")(passport)
        require("./facebook")(passport)
        require("./twitter")(passport)
        require("./google")(passport)
}
