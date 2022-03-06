console.log("function Expression/Evaluation");

// normal function
function sayHi() {
    console.log("hi");
}

sayHi();

// function Expression
// function evaluated, but not executed
var sayBye = function() { // also this is  anonymous function.
    console.log("bye");
}

// executing the function
sayBye();

// passing function as a parameter, callback function.
function callFunction(fun) {
    fun();
}

callFunction(sayBye);