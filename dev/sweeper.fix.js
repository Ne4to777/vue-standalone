/* eslint max-len:0 */
/* eslint no-unused-expressions:0 */
const fs = require('fs')

const sourceFilenameToRename = './node_modules/@vue/cli-service/lib/config/index-default.html'
const targetFilenameToRename = './node_modules/@vue/cli-service/lib/config/index-default.xhtml'
const sourceFilenameToWrite = './node_modules/@vue/cli-service/lib/config/app.js'

const rename = (source, target) => new Promise((resolve, reject) => fs.rename(source, target, (err) => err ? reject(new Error(err)) : resolve()))
const read = (source) => new Promise((resolve, reject) => fs.readFile(source, 'utf8', (err, data) => err ? reject(new Error(err)) : resolve(data)))
const write = (source, result) => new Promise((resolve, reject) => fs.writeFile(source, result, 'utf8', (err, data) => err ? reject(new Error(err)) : resolve(data)))

!(async () => {
	await rename(sourceFilenameToRename, targetFilenameToRename).catch(console.log)
	const data = await read(sourceFilenameToWrite).catch(console.log)
	const result = data.replace(/index-default\.html/, 'index-default.xhtml')
	write(sourceFilenameToWrite, result).catch(console.log)
})()
