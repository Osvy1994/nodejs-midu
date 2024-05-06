const fs = require('node:fs/promises')

const stats = fs.statSync('./file.txt')
console.log(stats.isFile(), stats.isDirectory(), stats.size)

console.log('Reading first file')
fs.readFile('./file.txt', 'utf8').then(text => console.log('first text', text))

console.log('do something')

console.log('Reading second file')
fs.readFile('./file2.txt', 'utf8').then(text =>
  console.log('second text:', text),
)
