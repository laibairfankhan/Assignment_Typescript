"use strict";
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//Creat a function:
function make_shirt(Size = "Large", Message = "I Love Typescript!") {
    console.log(`You Order a ${Size} T.Shirt that says  "${Message}".`);
}
make_shirt("Large");
make_shirt("Medium");
make_shirt("Small", "I am a programmer!");
