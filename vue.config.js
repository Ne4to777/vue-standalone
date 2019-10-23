const RestProxy = require('sp-rest-proxy')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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

	pages: {
		index: {
			entry: 'src/main.js',
			template: `src/templates/${process.env.NODE_ENV === 'production' ? 'build' : 'dev'}.ejs`,
			filename: 'index.html',
			templateParameters: {
				HOST: privateJSON.siteUrl
			}
		}
	},
	configureWebpack: {
		externals: process.env.NODE_ENV === 'production' ? {
			vue: 'Vue',
			'vue-router': 'VueRouter',
			vuex: 'Vuex'
		} : {},

		// optimization: process.env.NODE_ENV === 'production' ? {
		// 	runtimeChunk: 'single',
		// 	splitChunks: {
		// 		chunks: 'all',
		// 		maxInitialRequests: Infinity,
		// 		minSize: 0,
		// 		cacheGroups: {
		// 			vendor: {
		// 				test: /[\\/]node_modules[\\/]/,
		// 				name(module) {
		// 					// get the name. E.g. node_modules/packageName/not/this/part.js
		// 					// or node_modules/packageName
		// 					const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

		// 					// npm package names are URL-safe, but some servers don't like @ symbols
		// 					return `npm.${packageName.replace('@', '')}`
		// 				},
		// 			},
		// 		},
		// 	},
		// } : {},
	}
}
