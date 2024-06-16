const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    mode: 'production',
    target: 'web',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'WebpackPlugin',
            template: './src/index.html',
            filename: 'index.html',
            favicon: './src/logo.png',
        }),
        new FaviconsWebpackPlugin('./src/logo.png'),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        watchFiles: ['src/*']
    }
};