"use strict";
//Questin 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.
let magician1 = [] = ["Chris Angel", "David Blaine", "Dynamo"];
function show_magician(magician) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
show_magician(magician1);
