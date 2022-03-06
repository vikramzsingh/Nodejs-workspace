// console.log(events);
var events = require('events')
var util = require('util')
console.log("events a core module of nodejs/javaScript.");

console.log(events);

// EventEmitter can create a new Event,
// With which we can react/Interact when that event is triggered
// bacically behind logic is trigger and target. 
let myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
    console.log(msg);
});

myEmitter.emit('someEvent', "The event was emited");

// util, used for inheriting in object other class.
// I want any person created using this to inherit EventEmitter.
var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var jin = new Person("Jin");
var jack = new Person("Jack");
var james = new Person("James");

var people = [jin, jack, james];

people.forEach(function(person){
    person.on("speak", function(msg) {
        console.log(person.name + " said: " + msg);
    });
});

james.emit("speak", "This is it.");
jin.emit("speak", "Finally one solution.");
jack.emit("speak", "END PROGRAM!");