var fs = require('fs');

// first create writeMe.txt file
// fs.unlink('writeMe.txt', function(err, success){
//     if (err) {
//         console.log("error ", err);
//     } else {
//         console.log("success ", success);
//     }
// });

// synchronus way:-

// create directory
// fs.mkdirSync('stuff');

// delete dircetory
// fs.rmdirSync('stuff');

// asynchronus way
// when we use async methods,
// we should use call back function to do something omce this mkdir has been completed.
// basically do something with mkdir function when it complete its work. 
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        if (err) {
            console.log(err);
        }
        else {
            fs.writeFile('./stuff/writeMe.txt', data, function(){
                console.log("write in writeMe.txt file Success", data)
            })
            console.log("writeFile callback", data);
        }
        console.log("readfile callback")
    })
    console.log("mkdir callback");
});

console.log("End of Program!!")

// remove directory, only empty directory is removable
fs.unlink('./stuff/writeMe.txt', function() {
    fs.rmdir('stuff', function(){
        console.log("Success")
    })
})

// NOTE:- async code does not break