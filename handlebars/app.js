const handlebars = require('handlebars')

//console.log(template({name:'ricky'}))
//adding and removing log
const dataToFed = process.argv[2]
const template = handlebars.compile(
    "ID:{id}",
    
    
    
    <?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns="urn:enterprise.soap.sforce.com">
  <soapenv:Body>
     <createResponse>
        <result>
           <id>003D000000OY9omIAD</id>
           <success>true</success>
        </result>
        <result>
           <id>001D000000HTK3aIAH</id>
           <success>true</success>
        </result>
     </createResponse>
  </soapenv:Body>
</soapenv:Envelope>)

const xmlOutput = template()