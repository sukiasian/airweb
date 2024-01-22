import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin'

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(t|j)sx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
			{
				test: /\.svg$/, 
				use: ['svg-sprite-loader']
			},
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, 
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], 
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devServer: {
        port: 3000,
        host: '127.0.0.1',
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            title: 'Airweb Development Agency - Get the maximum from tech',
            filename: 'index.html',
			favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
            inject: 'body',
            minify: 'auto'
        }), 
		new SpriteLoaderPlugin() 
	]
};
