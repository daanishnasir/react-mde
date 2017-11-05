const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: [
        './demo/client.tsx'
    ],

    output: {
        filename: 'bundle-prod.js',
        path: '/',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        rules: [
            {test: /\.ts/, use: ['awesome-typescript-loader'], exclude: /node_modules/},
            {test: /\.tsx/, use: ['awesome-typescript-loader'], exclude: /node_modules/},
            {test: /\.css/, use: ExtractTextPlugin.extract({use: "css-loader"})},
            {test: /\.scss/, use: ExtractTextPlugin.extract({use: ["css-loader", "sass-loader"]})},
            {test: /\.jpe?g$|\.gif$|\.png$|\.ico$/, use: 'file-loader?name=[name].[ext]'},
            {test: /\.eot|\.ttf|\.svg|\.woff2?/, use: 'file-loader?name=[name].[ext]'},
        ]
    },

    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};