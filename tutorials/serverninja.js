var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res){
    console.log('request was made ' +req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var readstream = fs.createReadStream(__dirname +'/readMe.txt', 'utf8')
    readstream.pipe(res);
})
server.listen(3000, '127.0.0.1');
console.log('listening to 3000');


// write text to page
// var server = http.createServer(function(req,res){
//     console.log('request was made ' +req.url);
//     res.writeHead(200, {'Contenr-Type': 'text/plain'});
//     res.end('Hey this is text.')
//
// })
// server.listen(3000, '127.0.0.1');
// console.log('listening to 3000');
