var webpack = require("webpack");

module.exports = {
  cache: true,
  context: __dirname + "/src",
  entry: "./index.js",
  output: {
    path: "./dist",
    publicPath: "/dist/",
    filename: "peppery.js",
    library: "JSONSchemaForm",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
   module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel"],
      }
    ]
  }
};
