var webpack = require("webpack"),
path = require("path")


module.exports = {
  entry:path.join(__dirname, "src", "index.js"),
  output:{
    filename:"bundle.js",
    path:path.join(__dirname, "dist")
  },
  module:{
    loaders:[
      {test:/\.css$/,loader:"style-loader!css-loader"},
      {test:/\jsx?$/, loader:"babel-loader", exclude:/node_modules/}
    ]
  },
  resolve:{
    extensions:[".",".js",".json",".jsx",".css"]
  }
}
