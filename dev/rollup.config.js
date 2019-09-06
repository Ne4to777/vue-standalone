
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

const getBundle = (file, plugins = []) => ({
	input: './src/main.js',
	output: [{
		globals: {
			axios: 'axios',
			'crypto-js': 'CryptoJS'
		},
		sourcemap: true,
		sourcemapExcludeSources: true,
		file: `dist/${file}`,
		format: 'iife'
	}],
	external: ['axios', 'crypto-js'],
	plugins: [
		...plugins,
		resolve(),
		commonjs(),
		babel({
			exclude: 'node_modules/**',
			extensions: ['.js', '.vue'],
			runtimeHelpers: true
		})
	]
})

export default [
	getBundle('index.js', [vue()]),
	// getBundle('index.min.js', [terser()])
]
