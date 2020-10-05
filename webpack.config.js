var path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/Form.jsx",
    output: {
      path: path.resolve("build"),
      filename: "index.js",
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: [{
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        'react': path.resolve(__dirname, './node_modules/react')
    }
  },
  externals: {
   react: 'commonjs react',
  'react-dom': 'commonjs react-dom',
},
};
