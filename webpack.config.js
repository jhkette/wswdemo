const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');




module.exports = {
  mode: "development",
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: 'images/[name][ext]'
  },
  devtool: 'source-map', 
  devServer:{
    static:{
      directory: path.resolve(__dirname, 'dist')
    },
   
    open: true,
    hot: true,
    historyApiFallback: true


  },
   module:{
    rules:[
      {
        test: /\.s?css$/,
        use: [ MiniCssExtractPlugin.loader, //3. Extract css into files
        "css-loader", //2. Turns css into commonjs
        ],
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        type: 'asset/resource',
      
    },        
    ]
   },
   optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
      {from:'images',to:'images'} 
      ]
    }), 

  ],
   
};