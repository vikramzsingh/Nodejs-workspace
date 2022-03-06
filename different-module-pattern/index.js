var stuff = require('./stuff')
console.log("different export pattern")

console.log("index.js module loaded ", module);
console.log(stuff.counter(["Peter", "Dr. Otto", "Goblin"]));
console.log(stuff.adder(2, 3));
console.log(stuff.pi);
