"use strict";
//Question 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array
// of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magician = [] = ["Chris Angel", "David Blaine", "Dynamo"];
function show_magicians(magician) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magician);
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
make_great(magician);
