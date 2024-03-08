//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.



// Define a type for the Car object.
type Car = {

    Manufacture: string;

    Model_Name: string;

    [Key: string]: any;

}

// Function to create a Car object with optional properties.

function CreateCar(Manufacture: string, Model_Name: string, Optional: Record<string,any>): Car{

    return{

        Manufacture,

        Model_Name,

        ...Optional

    }
}
// Create a Car object using the CreateCar function.

const MyCar: Car = CreateCar("Toyota","Corolla", {color: "Black", year: "2024"})


// Print the created Car object to the console.

console.log(MyCar);

