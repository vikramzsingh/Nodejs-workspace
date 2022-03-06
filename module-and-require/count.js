var counter = function(arr) {
    return 'There are ' + arr.length + ' elements in this array';
}

// console.log(counter(["Hathori", "Peter", "Batman"]));

// this is not yet exported.

// We have to like this.
// what part of module we want to make available to the files which requires this module.  

module.exports = counter;