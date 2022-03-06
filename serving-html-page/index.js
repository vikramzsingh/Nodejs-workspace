var http = require('http');
var fs = require('fs');
console.log("Serving HTML page.");

// Serving HTML page.
var server = http.createServer((req, res) => {
    console.log("url triggered: "+ req.url)
    res.writeHead(200, {"content-type": "text/html"});
    var myReadStream = fs.createReadStream(__dirname+ '/index.html', 'utf8');
    myReadStream.pipe(res);
})

server.listen(3000, "127.0.0.1");
const localhost = 'http://127.0.0.1:3000'
console.log("Server running at port 3000:", localhost)