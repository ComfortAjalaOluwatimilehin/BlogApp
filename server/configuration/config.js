var express = require("express"),
app = express(),
path = require("path"),
morgan =require("morgan"),
bodyparser = require("body-parser"),
errorhandler = require("errorhandler"),
router = require(path.join(__dirname, "..","routes","setup.js"))
logger = function(err, req,res,next){  console.log("Req: ", req);next()}

app.use(morgan("dev"))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(logger)


var port = process.env.PORT || 8000
app.set("port", port)

app.use(router)

app.use("/", express.static(path.join(__dirname, "..", "..", "dist")))

if(process.env.NODE_ENV === "development"){
  app.use(errorhandler())
}

module.exports = app
