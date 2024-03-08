//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

//Make an array for Favorit Pizza:

const Favorit_Pizza: string[] = [`Cheeze Pizza`,`Pepperoni Pizza`,`Vegeterian Pizza`];


// Using a for loop to print just the names of the pizzas:
for(let i=0; i<Favorit_Pizza.length; i++){

    console.log(Favorit_Pizza[i]);
}


// Using a for loop to print a sentence expressing liking for each pizza:
for(let i=0; i<Favorit_Pizza.length; i++){
    console.log(`I like ${Favorit_Pizza[i]}`);
}
// Additional sentence expressing a general love for pizzas:
console.log(`\nI really ilke to eat pizzas. pizza comes in a variety of flavors and tooping,allowing individuals to customize it to their liking`);
