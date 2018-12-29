const ImageminPlugin = require('imagemin-webpack-plugin').default;
const path = require('path');

module.exports = {
    entry: {
        'main.js': path.join(__dirname, '../../', 'src/main.js')
    },

    loaders: [
        {
            test: /\.(woff|woff2|eot|ttf)$/,
            loader: 'file-loader?limit=100000',
            options: {name: 'fonts/[name].[hash].[ext]'}
        },
        {
            test: /\.(png|jpg|gif|bmp|jpeg|svg)$/,
            loader: 'file-loader?limit=100000',
            options: {name: 'images/[name].[hash].[ext]'}
        }
    ],

    plugins: [
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production'
        })
    ]
}