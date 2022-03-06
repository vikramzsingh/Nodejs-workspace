const http = require('http');
console.log("Creating a server");

// create a server and store it in a variable
// whenever we send a request to this server 
var server = http.createServer((req, res) => {
    console.log("request was made: ", req.url)
    // setting headers
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // End this response then send resopnse to browser
    res.end(JSON.stringify({
        data: "hello server"
    }));
});

// another way
// Create a local server to receive data from
// const server = http.createServer();

// // Listen to the request event
// server.on('request', (request, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!'
//   }));
// });

// listen on this port
server.listen(3000, '127.0.0.1');
console.log("listening on port 3000")

console.log("type of stringify function ", typeof JSON.stringify({
    data: "hello server"
}))
let stringValue = '{"data":"hello server"}'
console.log("type of parse function ", typeof JSON.parse(stringValue));