const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


const path = require('path');




module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            // preset for javascript
            options: {
              presets: ["@babel/env"],
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          },
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
            loader: "file-loader",
            options:{
              name: "[name].[ext]",
              outputPath: "imgs"
              
            }
        }
        
    },        
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer:[
      new HtmlWebpackPlugin({
        template: "index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
    ]
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            MiniCssExtractPlugin.loader, //3. Extract css into files
            "css-loader", //2. Turns css into commonjs
            "postcss-loader"
            
        ],
      },
    ],
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
   
  ],
};