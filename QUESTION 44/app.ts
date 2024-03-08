//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Define a function to handle sandwich orders with a variable number of ingredients.

function sandwich(...items: string[]): void{

    console.log("Sandwich Order :");

     // Loop through the items and print each one.

    for (let i=0; i<items.length; i++){

        console.log(` ${items[i]}`)
    }
}

// Print a personalized message for the person ordering the sandwich.

console.log(`Enjoy your Sandwich Irha Khan!`);

// Call the function the first time with multiple ingredients.

sandwich(`Beef`,`Cheese`,`Capsicum`);


// Call the function the second time with a different set of ingredients.

sandwich(`Chiken`,`Garlic Beef`,`Cheese`);


// Call the function the third time with a minimal set of ingredients.

sandwich(`Tomato`,`Mayo Sauce`);