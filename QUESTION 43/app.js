"use strict";
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Function to display magician names:
function show_magicians(magicians) {
    // Loop through each magician in the array:
    for (const magician of magicians) {
        // Capitalize the first letter of each magician's name:
        console.log(magician.charAt(0).toLocaleUpperCase() + magician.slice(1));
    }
}
// Function to add "the Great" to magician names and return a new array:
function make_great(magicians) {
    // Loop through each magician in the array:
    for (let i = 0; i < magicians.length; i++) {
        // Loop through each magician in the array:
        magicians[i] = magicians[i] + ' the great .';
    }
}
const magicians2 = ["Derren Brown", "Harry Houdini", "David Blaine"];
//make_great(magicians2);
//show_magicians(magicians2);
// Function to add "the Great" to magician names and return a new array:
function make_great2(magicians) {
    // Create a new array to store the modified magician names:
    const greatMagicians = [];
    // Loop through each magician in the original array:
    for (let i = 0; i < magicians.length; i++) {
        // Add " the Great" to each magician's name and push it to the new array:
        greatMagicians.push(magicians[i] + " the Great");
    }
    // Return the new array with modified magician names:
    return greatMagicians;
}
// Original array of magician names:
const magicians3 = ["Derren Brown", "Harry Houdini", "David Blaine"];
// Call the function to create a new array with "the Great" added to each magician's name:
const greatMagicians2 = make_great2(magicians3);
// Call the function to display the original magician names:
show_magicians(magicians3);
// Call the function to display the new array with "the Great" added to each magician's name:
show_magicians(greatMagicians2);
