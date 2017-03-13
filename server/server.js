var path = require("path"),
app = require(path.join(__dirname, "configuration", "config.js"))
require("./config")(app)



app.listen(app.get("port"), function(){
  console.log("App listening on PORT: ", app.get("port"))
})

process.on('uncaughtException', function (err) {
    console.log(err);
});
