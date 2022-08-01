const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
// const miniCss = require('mini-css-extract-plugin')

module.exports = {
   mode: "development",
   entry: ["@babel/polyfill", "./src/index.jsx"],
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[hash].js"
   },
   devServer: {
      port: 3000
   },
   plugins: [
      new HTMLWebpackPlugin({ template: "./src/index.html" }),
      new CleanWebpackPlugin(),
      // new miniCss({ filename: 'style.css' }),
   ],
   module: {
      rules: [{
         test: /\.(css|scss)$/,
         use: [
            'style-loader',
            'css-loader',
            'sass-loader',
         ]
      },
      {
         test: /\.(jpg|jpeg|png|svg)/,
         use: ['file-loader']
      },
      {
         test: /\.m?js$/,
         exclude: /node_modules/,
         use: {
            loader: "babel-loader",
            options: {
               presets: ['@babel/preset-env']
            }
         }
      },
      {
         test: /\.m?jsx$/,
         exclude: /node_modules/,
         use: {
            loader: "babel-loader",
            options: {
               presets: ['@babel/preset-react', '@babel/preset-env']
            }
         }
      }
      ]
   }

}