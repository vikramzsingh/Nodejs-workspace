var http = require('http');
var fs = require('fs');
console.log("readable streams in NodeJs");

// // type RequestListener = (req: IncomingMessage, res: ServerResponse) => void;
// let  server = http.createServer((req, res) => {
//     console.log("request was made " + req.url);
//     res.writeHead(200, {"Content-Type": "text/plain"})
//     // writinng to response 
//     res.end("hello hi!!");
// })

// server.listen(3000, "127.0.0.1");

// we need to read this file by little bit.
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
console.log('myReadStream ' + myReadStream);

// we are reading using buffer buffer get a piece/chunk of data at a time.
// CreateReadStream inherit Emitter, and data event(builtIn) is available to us when we reading data-stream.
// as soon as we get a data chunk, data events is triggered and arrow function runs every time. 
myReadStream.on('data', (chunk) => {
    console.log('new Chunk recieved:');
    console.log(chunk);
})