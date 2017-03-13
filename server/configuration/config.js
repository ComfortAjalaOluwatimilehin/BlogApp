var express = require("express"),
app = express(),
path = require("path"),
morgan =require("morgan"),
bodyparser = require("body-parser"),
methodOverride = require("method-override"),
errorhandler = require("errorhandler"),
router = require(path.join(__dirname, "..","routes","setup.js")),
 passport = require("passport"),
 cookieparser = require("cookie-parser"),
 cors = require("cors"),
port = process.env.PORT || 8000,
data  = require("./data"),
mongoose =  require("mongoose"),
session = require("express-session")


var connectDB = mongoose.connect(require("../dbhelpers/config").name, null, function(){
    console.log("database is connected")
}),
db = connectDB.connection

app.use(morgan("dev"))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cookieparser())
app.use(session(data.getSessions(session,db)))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride())
app.use(cors({credentials: true, origin: true}))
app.use(router)
app.set("port", port)

app.use("/", express.static(path.join(__dirname, "..", "..", "dist")))

if(process.env.NODE_ENV === "development"){
  app.use(errorhandler())
}

module.exports = app
