let fs = require('fs');
let http = require('http');
console.log("pipes for reading and writing");

// With pipe we do not need to listen with on('data') event over read-data-stream(createReadStream). Pipes automatically does that for us.
// After that pipe starts to write data to write Stream. So we can write automatically.

// create a Read and write Stream
let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// now use Pipe on Read-Streams, and write in destination-file by Write-Stream, this works autimatically.
myReadStream.pipe(myWriteStream);

// **NOTE Below code is separate code for sending response-data to user via streams.
// SEND DATA TO THE USER.
// // type RequestListener = (req: IncomingMessage, res: ServerResponse) => void;
let  server = http.createServer((req, res) => {
    console.log("request was made " + req.url);
    res.writeHead(200, {"content-type": "text/plain"})

    let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    // writinng to response 
    myReadStream.pipe(res); // This directly send the data to user form read-stream to write-stream (just like Encoder and Decoder in Golang.  
})

server.listen(3000, "127.0.0.1");
console.log("Server running at port 3000");