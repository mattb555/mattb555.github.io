module.exports = {
    entry: "./routing.js",
    output: {
        filename: 'bundle-index.js',
        publicPath: '/dist/'
    },
    devServer: {
        watchContentBase: true,
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }],
    }
}