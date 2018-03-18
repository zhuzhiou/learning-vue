const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};