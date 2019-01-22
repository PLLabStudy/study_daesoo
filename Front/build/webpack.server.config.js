const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
    entry: ['./src/entry-server.ts'],
    output: {
        filename: 'static/js/[name].[chunkhash].js',
        publicPath: '/',
        libraryTarget: 'commonjs2',
        path: path.resolve('dist')
    },
    plugins: [
        // make sure to include the plugin!
        new VueSSRServerPlugin(),
        new VueLoaderPlugin()
    ],
    mode: process.env.NODE_ENV,
    target: 'node',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: 'ts-loader!tslint-loader'
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}