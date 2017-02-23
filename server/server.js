var path = require("path"),
app = require(path.join(__dirname, "configuration", "config.js")),
mongoose = require("mongoose"),
dbData = require(path.join(__dirname, "dbhelpers","config.js"))
require("./config")(app)

mongoose.connect(dbData.name, function(){
    console.log(dbData.onconnect)
})

app.listen(app.get("port"), function(){
  console.log("App listening on PORT: ", app.get("port"))
})
