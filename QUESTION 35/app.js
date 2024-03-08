"use strict";
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
//Make a Array:
let Animals_Name = [`Cow`, `Sheep`, `Goats`, `Camel`];
//print the name each animal in the array:
for (let i of Animals_Name) {
    console.log(i);
}
//Loop print the Statement with each Animal Name:
for (let j of Animals_Name) {
    console.log(`${j} would make a great pet!`);
}
console.log(`\n\nAll these Animals, ${Animals_Name[0]} , ${Animals_Name[1]} , ${Animals_Name[2]} and ${Animals_Name[3]} meat is Halal in Islam`);
