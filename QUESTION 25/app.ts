//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

//• Write one version of this program that passes the if test and another that fail . (The version that fails will have no output.)

// Creat a variable Alien_Color.

let Alien_Color: string = "Green";

//Test Condition:

if(Alien_Color === "Green"){

// If the condition is true, print the message:
    console.log("the player just earned 5 point");
}


// Change Alien_Color value to test a failing condition.
Alien_Color = "Red";

//Test Condition:
if(Alien_Color === "Green"){

    // If the condition is true, print the message:
    console.log("the player just earned 5 point");

 // This block will not show any output because the condition is false.
}

