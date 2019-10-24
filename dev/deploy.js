const robocopy = require('robocopy')
const path = require('path')
const config = require('./private.json')

robocopy({
	source: './dist',
	destination: path.join(config.siteDisk, config.siteRelativePath, config.deployPath),
	files: ['*.*'],
	file: {
		excludeFiles: ['*.html'],
	},
	copy: { subdirs: true }
})
