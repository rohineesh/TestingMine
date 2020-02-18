var fs = require('fs');
var parse = require('xml-parser');
var inspect = require('util').inspect;
const xmlToJson = (filePath)=>{  
try {
  if (fs.existsSync(filePath)) {
    //file exists
  }
} catch(err) {
  console.error(err)
  return
}

var xml = fs.readFileSync(filePath, 'utf8');
var obj = parse(xml);
//console.log(inspect(obj, { colors: true, depth: Infinity }));
return obj
} 

 
module.exports=xmlToJson