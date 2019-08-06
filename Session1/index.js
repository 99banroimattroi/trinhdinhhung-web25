// console.log("hello, world");




// var http = require("http");
// http.createServer(function(request, response) {
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.end('Hello World\n');
  
// }).listen(8081);

// console.log("Server is running ar 8081")





const express = require('express')
const app = express()
const port = 3000

app.get('/hello', function(req, res) {
  //read from document.txt
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))