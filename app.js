const xmltojson = require('./xmltojson')
const filePath = process.argv[2]
const jsonFile= xmltojson(filePath)
console.log(jsonFile)