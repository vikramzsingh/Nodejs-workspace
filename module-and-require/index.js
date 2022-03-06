// Note:- require is built in availabe in Global in Node js
var counter = require('./count');

console.log("module and require.")
console.log(module);
console.log(counter(["Hathori", "Peter", "Batman"]));

