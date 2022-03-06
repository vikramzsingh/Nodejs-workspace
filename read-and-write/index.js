var fs = require("fs");
console.log("read and write in nodejs");

// its a method this will read file completely before moving to the further code/ or rest of code.
var readMe = fs.readFileSync('./readMe.txt', "utf8");
// OR
// fs.readFileSync('./readMe.txt', {encoding: "utf8"});
console.log(readMe);

// writing to writeMe.txt,
// if file not available it will first create file then write into file.
fs.writeFileSync('./writeMe.txt', readMe);

// Asynchronous way
console.log("async way!")
// In async way a callback function is fired when proces is complete or when process notify engine i'm complete. 
fs.readFile('./readMe.txt', 'utf8', function(err, data){
    console.log(data);
    fs.writeFile('./writeMe1.txt', data, function(error, data1){       
        if (error) {
            console.log(error)
            return
        }
        console.log(data1)
    });
})
console.log("END") // in async way this will print first as resdFile is async function so form that point this tell go check is othe code need to be executed.

