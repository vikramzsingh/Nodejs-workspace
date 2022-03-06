var http = require('http');
var fs = require('fs');

console.log("routing in nodejs.")

var server = http.createServer(function(req, res) {
    try {
        console.log("req url: " + req.url);
        // throw "throwing error"

        if(req.url === '/' || req.url === '/home') {
            res.writeHead(200, {"Content-Type": "text/html"});
            fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
        } else if(req.url === '/contact') {
            res.writeHead(200, {"Content-Type": "text/html"});
            fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
        } else if(req.url === '/data') {
            res.writeHead(200, {"Content-Type": "application/json"});
            let data = [{name: "Vikram", age: 23}, {name: "Bobby", age: 24}]
            res.end(JSON.stringify(data));
        } else {
            fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res)
        }
    } catch(e) {
        console.log("Exception occured:", e);
    }
    
    // allways execute
    finally {
        console.log("Program END!")
    }
})

server.listen(3000, '127.0.0.1');
console.log("Server running at port 3000 " + `http://127.0.0.1:3000`)