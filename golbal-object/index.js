console.log('Nodejs Global Object');

// execute only once after 2 seconds.
setTimeout(function(){
    console.log("3 seconds have passed");
}, 3000);

let time = 0
// execute repeatedly after every 2 seconds.
let timer = setInterval(function(){
    time += 2
    console.log(time + " seconds have passed");
    if (time > 5) {
        clearInterval(timer);
        console.log("END!!")
    }
}, 2000);

console.log("directory path: " + __dirname);
console.log("file name: " + __filename);