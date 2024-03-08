//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.


// Create a variable Alien_Color:
let Alien_Color: string = "Green";

//Test Condition:

if(Alien_Color === "Green"){

    // If the condition is true, print the message:
    console.log("player just earned 5 points for shooting the alien.");
}
else{

// If the condition is false, print the alternative message:
    console.log("the player just earned 10 points.");

}

// Change Alien_Color value to test the else block:
Alien_Color = "Red";


// Test Condition:
if(Alien_Color === "Green"){

    // If the condition is true, print the message:
    console.log("the player just earned 5 points for shooting the alien");
}else {

    // If the condition is false, print the alternative message:
    console.log("The player just earned 10 points.");
}