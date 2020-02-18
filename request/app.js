const request = require('request')
const fs = require('fs')
request('http://www.google.com',function(error,response,body){
    fs.writeFileSync('Google.com',response)
})