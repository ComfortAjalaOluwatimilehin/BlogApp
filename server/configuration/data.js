//MongoStore = require("connect-mongo")(session)
module.exports.cors = function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
   next()
 }

 module.exports.logger = function(err, req,res,next){;next()}

 module.exports.sessions = {
   secret: 'ilovescomfortajala',
   resave: true,
   saveUninitialized: true
 }


module.exports.getSessions = function(session,db){
            var MongoStore = require("connect-mongo")(session)
            var data = {
              secret: 'ilovescomfortajala',
              resave: true,
              saveUninitialized: true,
              store:new MongoStore({
                mongooseConnection:db
              })
            }
            return data 
}
