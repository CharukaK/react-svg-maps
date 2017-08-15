module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    devServer: {
        contentBase: './public',

        historyApiFallback: true,
        inline: true,
        port: 9000
    }
};