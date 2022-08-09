const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   mode: "development",
   entry: ["@babel/polyfill", "./src/index.tsx"],
   output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[hash].js"
   },
   devServer: {
      port: 3000,
      historyApiFallback: true
   },

   resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx']
   },

   plugins: [
      new HTMLWebpackPlugin({ template: "./src/index.html" }),
      new CleanWebpackPlugin(),
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
      },
      {
         test: /\.tsx?$/,
         use: [
            {
               loader: "babel-loader"
            },
            {
               loader: "ts-loader"
            }
         ]
      }
      ]
   }

}