module.exports = {

  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
  },

  resolve: {
    // Enables ES6 modules to be loaded w/ "root/project paths"
    //root: __dirname + '/src'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }

};
