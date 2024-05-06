import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Operating System:', platform())
console.log('System Version:', release())
console.log('Architecture:', arch())
console.log('CPUs:', cpus())
console.log('Free Memory:', freemem() / 1024 / 1024)
console.log('Total Memory:', totalmem() / 1024 / 1024)
console.log('Uptime:', uptime() / 60 / 60)
