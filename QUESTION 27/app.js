"use strict";
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
//If the alien is yellow, print a message that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points.
//Write three versions of this program, making sure each message is printed for the appropriate color alien.
//creat a variable:
let Alien_Color = "Green";
//version : 1 of the program:
if (Alien_Color === "Green") {
    console.log(`Version : 1 the player earned 5 points.`);
}
else if (Alien_Color === "Yellow") {
    console.log(`the player earned 10 points.`);
}
else if (Alien_Color === "Red") {
    console.log(`the player earned 15 points.`);
}
else
    (`Enter the right color`);
//version 2 of the program :
Alien_Color = "Yellow";
if (Alien_Color === "Green") {
    console.log(`the player earned 5 points.`);
}
else if (Alien_Color === "Yellow") {
    console.log(`Version : 2 the player earned 10 points.`);
}
else if (Alien_Color === "Red") {
    console.log(`the player earned 15 points.`);
}
else
    (`Enter the right color`);
//version 3 of the program ;
Alien_Color = "Red";
if (Alien_Color === "Green") {
    console.log(`the player earned 5 points.`);
}
else if (Alien_Color === "Yellow") {
    console.log(`the player earned 10 points.`);
}
else if (Alien_Color === "Red") {
    console.log(`Version : 3 the player earned 15 points.`);
}
else
    (`Enter the right color`);
