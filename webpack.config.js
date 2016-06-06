var webpack = require('webpack');

module.exports = {
  entry: "./entry.js",
  output: {
    filename: "birthday-party.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loaders: ['style','css']
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        loaders: [
          'url-loader?limit=8192',
          'image-webpack?optimizationLevel=7&interlaced=false'
        ]
      }
   ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}