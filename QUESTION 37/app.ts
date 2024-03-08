//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


// Function to create a T-shirt with a specified size and message
function make_shirt(Size = "Large", Message = "I Love Typescript!"):void{


    
// Print a sentence summarizing the T-shirt size and the message on it:
    console.log(`You Order a ${Size} T.Shirt that says  "${Message}".`);
}


// Create a T-shirt with the default size and message
make_shirt("Large");


// Create a T-shirt with the default size and message
make_shirt("Medium");


// Create a T-shirt with a custom size and message:
make_shirt("Small","I am a programmer!");

