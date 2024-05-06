const fs = require('node:fs')
// const { promisify } = require('util')
// const readFilePromise = promisify(fs.readFile)

const stats = fs.statSync('./file.txt')
console.log(stats.isFile(), stats.isDirectory(), stats.size)

console.log('Reading first file')
const text = fs.readFile('./file.txt', 'utf8', (err, text) => {
  err ? console.log(err) : console.log(text)
})

console.log('Reading second file')
const text2 = fs.readFile('./file2.txt', 'utf8', (err, text) => {
  if (err) {
    console.log(err)
  } else {
    console.log(text)
  }
})
