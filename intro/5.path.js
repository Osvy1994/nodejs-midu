const { log } = require('node:console')
const path = require('node:path')

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

console.log(path.sep)

const fileName = path.basename('/tmp/osvy/secret/password.txt', '.txt')

console.log(fileName)

const extension = path.extname('my.super.image.jpg')
console.log(extension)
