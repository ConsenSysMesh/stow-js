const webpack = require('webpack');
const path = require('path');
const yargs = require('yargs');

const libraryName = 'Linnia';
const plugins = [];

let outputFile;

if (yargs.argv.p) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

const entry = {
  app: [__dirname + '/src/index.js']
};

const output = {
  path: path.join(__dirname, '/dist'),
  filename: 'index.js',
  library: 'Linnia',
  libraryTarget: 'umd',
  libraryExport: "default",
  umdNamedDefine: true
};

const devtool = 'source-map';

const config = [{
  entry: entry,
  devtool: devtool,
  mode: 'production',
  performance: { hints: false },
  output: output,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": ["env"]
            }
          },
        ]
      },
    ]
  },
  resolve: {
      extensions: ['.js'],
      modules: [
          'node_modules',
          'src',
      ]
  },
  plugins: plugins,
}];

module.exports = config;
