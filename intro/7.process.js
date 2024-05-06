//console.log(process.argv)

console.log(process.cwd())

console.log(process.env.Pepe)

process.exit(1)

process.on('exit', () => {
  //Clean resources
})
