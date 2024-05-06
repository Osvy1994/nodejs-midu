const { readFile } = require('node:fs/promises')

Promise.all([
  readFile('./file.txt', 'utf8'),
  readFile('./file2.txt', 'utf8'),
]).then(([text, text2]) => {
  console.log('first text', text)
  console.log('second text', text2)
})
