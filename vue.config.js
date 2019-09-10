const HtmlWebpackPlugin = require('html-webpack-plugin')
const RestProxy = require('sp-rest-proxy')

const privateJSON = require('./dev/private.json')

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	devServer: {
		contentBase: './public',
		port: 3000,
		proxy: 'http://localhost:8080',
		before: () => new RestProxy({
			configPath: './dev/private.json',
			hostname: 'localhost',
			port: 8080
		}).serve()
	},
	filenameHashing: false,
	configureWebpack: {
		plugins: [
			new HtmlWebpackPlugin({
				template: 'dev/index.ejs',
				templateParameters: {
					HOST: privateJSON.siteUrl
				}
			})
		]
	}
}
