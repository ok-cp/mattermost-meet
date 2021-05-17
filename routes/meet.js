require('dotenv').config();

const fs = require('fs');
const qs = require('querystring');
const router = require('express').Router();
const token = process.env.TOKEN;

router.post('/', (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  if (req.headers.authorization == "Token "+token){
    console.log("#####Successed#####")
    console.log(req.body.text)
    console.log(`statusCode: ${res.statusCode}`)

    value=req.body.text.split(" ");

//    let data = {
//       meet : value[0],
//       name : req.body.user_name,
//       channel : value[1]
//    }

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write('{"text":"http://g.co/meet/'+value[0]+'","response_type":"in_channel"}');
    res.end();
  }else{
    console.log("Wrong Token!!!!!")
  }
  
});

module.exports = router;
