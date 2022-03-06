console.log("stuff.js After creating modules ", module);

module.exports.counter = function(arr) {
    return "The length of ", + arr.length + " elements in this array";
}

module.exports.adder = function(a, b) {
    return `The sum of 2 number is ${a+b}`;
}

module.exports.pi = 3.142;

// module is object and exports is a boject in side module object.
// In this exports object we are keeping counter as a key and and function as a value; (basically storing function in export object.)
// we can store multiple var or function in this exports object. 
// The counter property of this object is equal to the function above.
// we can also add more properties(diff. functions and variables) in this module object by exports object.

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// To view properties in module object --> export object
console.log("Stuff.js After creating modules ", module);