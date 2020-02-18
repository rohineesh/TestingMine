// const eventEmittor = require('events')

// const myEmittor = new eventEmittor
// myEmittor.on('event',()=>{
//     console.log('event occured')
// })

// myEmittor.emit('event')


const request = require('request')
const fs = require('fs')
request.get('http://google.com').
on('response',(response)=>{
    console.log(response.statusCode)
})
.pipe(fs.createWriteStream('google'))
