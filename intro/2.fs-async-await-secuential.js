const { readFile } = require('node:fs/promises')

;(async () => {
  console.log('Reading first file')
  const text = await readFile('./file.txt', 'utf8', (err, text) => {
    err ? console.log(err) : console.log(text)
  })
  console.log('first text', text)

  console.log('Reading second file')
  const text2 = await readFile('./file2.txt', 'utf8', (err, text) => {
    if (err) {
      console.log(err)
    } else {
      console.log(text)
    }
  })
  console.log('second text', text2)
})()
