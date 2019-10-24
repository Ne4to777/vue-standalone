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
		optimization: {
			splitChunks: false
		}
	}
}
