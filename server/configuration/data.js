module.exports.cors = function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
   next()
 }

 module.exports.logger = function(err, req,res,next){  console.log("Req: ", req);next()}

 module.exports.sessions = {
   secret: 'ilovescomfortajala',
   resave: true,
   saveUninitialized: true }
