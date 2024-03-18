const modoDev = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');  
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/assets/js/navegacao.js',
    output: {
        filename: 'app.min.js',
        path: __dirname + '/public/assets/js'
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../css/estilo.css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/index.html',
                    to: '../../'
                }
            ]
        })
    ],
    module: {
        rules: [
            {
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
                ]
            },

            {
                test: /\.html$/,
                type: 'asset/resource',
                generator: {
                    filename: '../../paginas/[name][ext]'
                }
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '../fonts/[name][ext]'
                }
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '../imgs/[name][ext]'
                }
            },
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        compress: true,
        port: 8051
    }
};
