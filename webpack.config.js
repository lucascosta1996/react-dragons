var path = require('path')
var HtmlWebpackPlugin =  require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
    devServer: {
        port: 3001,
        historyApiFallback: true,
        openPage: ''
    },
    entry : ['babel-polyfill', './src/index.js'],
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']},
            {test: /\.(png|svg|jpe?g|gif)$/i, use: [
                {
                    loader: 'file-loader'
                }
            ]}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        })
    ]
}
