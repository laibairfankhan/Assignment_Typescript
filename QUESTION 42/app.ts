//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


// Function to display magician names
function show_magicians(magicians: string[]): void{

        // Loop through each magician in the array:

    for(const magician of magicians){
         // Capitalize the first letter of each magician's name:
        console.log(magician.charAt(0).toLocaleUpperCase() + magician.slice(1));
    }
}


// Function to add "the Great" to magician names:
function make_great(magicians: string[]): void {
    // Loop through each magician in the array and modify their name:
    for (let i=0; i<magicians.length; i++) {
    magicians[i] = magicians[i]  + ' the great .'
    }
}

// Array of magician names:
const magicians2: string[] = ["derren Brown","harry Houdini","david Blaine"];
// Call the function to add "the Great" to magician names:
make_great(magicians2);

// Call the function to display modified magician names:
show_magicians(magicians2);
