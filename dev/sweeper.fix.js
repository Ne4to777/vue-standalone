/* eslint max-len:0 */
/* eslint no-unused-expressions:0 */
const fs = require('fs')

const sourceServerFilenameToRename = './node_modules/@vue/cli-service/lib/config/index-default.html'
const targetServerFilenameToRename = './node_modules/@vue/cli-service/lib/config/index-default.xhtml'
const sourceServerFilenameToWrite = './node_modules/@vue/cli-service/lib/config/app.js'

const sourceProxyFilenameToRename = './node_modules/sp-rest-proxy/static/index.html'
const targetProxyFilenameToRename = './node_modules/sp-rest-proxy/static/index.xhtml'
const sourceProxyFilenameToWrite = './node_modules/sp-rest-proxy/dist/core/routers/genericGet.js'

const rename = (source, target) => new Promise((resolve, reject) => fs.rename(source, target, (err) => err ? reject(new Error(err)) : resolve()))
const read = (source) => new Promise((resolve, reject) => fs.readFile(source, 'utf8', (err, data) => err ? reject(new Error(err)) : resolve(data)))
const write = (source, result) => new Promise((resolve, reject) => fs.writeFile(source, result, 'utf8', (err, data) => err ? reject(new Error(err)) : resolve(data)))

!(async () => {
	await rename(sourceServerFilenameToRename, targetServerFilenameToRename).catch(console.log)
	const dataServer = await read(sourceServerFilenameToWrite).catch(console.log)
	const resultServer = dataServer.replace(/index-default\.html/, 'index-default.xhtml')
	await write(sourceServerFilenameToWrite, resultServer).catch(console.log)

	await rename(sourceProxyFilenameToRename, targetProxyFilenameToRename).catch(console.log)
	const dataProxy = await read(sourceProxyFilenameToWrite).catch(console.log)
	const resultProxy = dataProxy.replace(/index\.html/, 'index.xhtml')
	await write(sourceProxyFilenameToWrite, resultProxy).catch(console.log)
})()
