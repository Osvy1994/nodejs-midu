const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.log('Error', err)
  }

  files.forEach(file => console.log(file))
})
