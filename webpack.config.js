module.exports = {
    context: __dirname, 
    entry: "./pages/index.js",
    module: {
        loaders: [ { 
            test: /\.js|.jsx?$/, 
            exclude: /(node_modules|bower_components)/, 
            loader: 'babel-loader', 
          }, { 
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loaders: [ 
              'file?hash=sha512&digest=hex&name=[hash].[ext]', 
              'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false' 
            ] 
          } ] 
    },
    //your output, plugins, and devServer if applicable
  };