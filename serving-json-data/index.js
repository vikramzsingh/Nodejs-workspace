var http = require('http');
console.log("Serving HTML page.");

// Serving HTML page.
var server = http.createServer((req, res) => {
    console.log("url triggered: "+ req.url)
    res.writeHead(200, {"Content-Type": "application/json"});
    let myObj = {
        name: "Shiv",
        age:  23,
        job:  "developer"
    }
    // This end() method expects string or buffer.
    // So convert Object into string.
    res.end(JSON.stringify(myObj));
})

server.listen(3000, "127.0.0.1");
const localhost = 'http://127.0.0.1:3000'
console.log("Server running at port 3000:", localhost)