// const async = require('async')
// const obj = [{name:'ricky'},{age:27}]
// const print= (val)=>{console.log(val)}
// async.eachLimit(obj,1,print)


// const request = require('request')
// const fs = require('fs')
// var func1=(url)=>
// {
//     request.get(url)
//     .on('response',(response)=>{
//         console.log(response.statusCode)
//     })
//     .pipe(fs.writeFile('pic1'))
// }
// func1('http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg')

const sharp = require('sharp')
const request = require('request')
const fs = require('fs')
request.get('https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg').
on('response',(res)=>{
    //console.log(response.statusCode)
    //fs.writeFile('google',response.body,'binary',()=>{console.log('haha')})
    var body = ''
    res.setEncoding('binary')
        res
          .on('error', function(err) {
            //callback(err)
          })
          .on('data', function(chunk) {
            body += chunk
          })
          .on('end', function() {
            // What about Windows?!
            //var path = '/tmp/' + Math.random().toString().split('.').pop()
            var path = 'newimage'
            sharp(body)
  .resize(320, 240)
  .toFile('output', (err, info) => {  console.log(info)});
            //fs.writeFile(path, pulbody, 'binary', function(err) {
              //callback(err, path)
            //})
        })
})


// This to test the commit and push command on github