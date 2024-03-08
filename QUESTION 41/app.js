"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Function to display magician names:
function show_magicians(magicians) {
    // Loop through each magician in the array:
    for (const magician of magicians) {
        // Capitalize the first letter of each magician's name:
        console.log(magician.charAt(0).toLocaleUpperCase() + magician.slice(1));
    }
}
// Array of magician names:
const magician = ["derren brown", "harray houdini", "david blaine"];
// Call the function to display magician names:
show_magicians(magician);
