var path = require("path");
var webpack = require("webpack");

module.exports = {

  entry: {
    app: "src/Initializer.jsx",
    vendor: ["object-assign", "react", "flux"]
  },

  output: {
    filename: "dist/bundles/[name].bundle.js"
  },

  resolve: {
    root: [__dirname, "node_modules"],
    modulesDirectories: ['src', 'src/system', 'src/components', 'src/stores'],
    extensions: ['', '.js', '.jsx']
  },

  resolveLoader: { root: path.join(__dirname, "node_modules") },

  devtool: "source-map",

  module: {
    loaders: [
      { test: /\.(js|jsx)?$/, loaders: ['jsx?harmony&stripTypes', 'flowcheck'] },
    ]
  },

  plugins: [
      new webpack.optimize.CommonsChunkPlugin('dist/bundles/common.js')
  ]

}
