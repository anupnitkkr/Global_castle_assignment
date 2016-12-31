//Explanation for the config file can be found here https://webpack.github.io/docs/configuration.html
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/entry.js",
  output: {
    path: "./public",
    filename: "script.min.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
      }
    }]
  },
  //https://webpack.github.io/docs/list-of-plugins.html
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }), // Minifies JS Code
  ],
};
