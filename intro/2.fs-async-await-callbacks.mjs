import { statSync, readFile } from 'node:fs'

const stats = statSync('./file.txt')
console.log(stats.isFile(), stats.isDirectory(), stats.size)

console.log('Reading first file')
const text = await readFile('./file.txt', 'utf8', (err, text) => {
  err ? console.log(err) : console.log(text)
})

console.log('Reading second file')
const text2 = await readFile('./file2.txt', 'utf8', (err, text) => {
  if (err) {
    console.log(err)
  } else {
    console.log(text)
  }
})
