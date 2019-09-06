module.export = {
	presets: [
		['@vue/app', {
			modules: false,
			targets: {
				browsers: '> 0.05%, not ie < 10, not op_mini all',
				node: 'current'
			},
			polyfills: [
				'es6.promise',
				'es6.symbol'
			]
		}]
	],
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all'
		}
	}
}
