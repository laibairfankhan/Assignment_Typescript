//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.



// Function to create a T-shirt with a specified size and message:
function make_shirt(Size: String, text: string):void{
 
// Print a sentence summarizing the T-shirt size and the message on it:
    console.log(`You Order a ${Size} T.Shirt that says "${text}".`);
}
// Call the function with specific size and message:
make_shirt("Medium","I Love pakistan!");
