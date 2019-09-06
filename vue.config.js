const RestProxy = require('sp-rest-proxy')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devServer: {
		contentBase: './dev/assets',
		port: 3000,
		proxy: 'http://localhost:8080',
		before: () => new RestProxy({
			configPath: './dev/private.json',
			hostname: 'localhost',
			port: 8080
		}).serve()
	},

	chainWebpack: config => {
		config.merge({
			externals: {
				axios: 'axios',
				'crypto-js': 'CryptoJS',
				SP: 'SP',
				'spx-com': 'spx',
				vue: 'Vue',
				vuex: 'Vuex',
				'vue-router': 'VueRouter'
			}
		})
		config.plugin('copy').tap(([options]) => {
			options[0].ignore.push('sp.assembly.js')
			return [options]
		})
	},
	configureWebpack: {
		plugins: [
			new HtmlWebpackPlugin({
				template: 'public/index.ejs',
				templateParameters: {
					sp: 'sp.assembly.js'
				}
			})
		]
	},

	filenameHashing: false,
	pages: {
		'index.min': {
			entry: 'src/main.js',
			filename: 'index.html'
		}
	}
}
