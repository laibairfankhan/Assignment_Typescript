//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


// Function to describe a city and its country:
function describe_city(city: string, country = "Pakistan"):void{

// Print a sentence describing the city and country:
    
    console.log(`${city} is in ${country}.`);
}


// Calling the function for a city in the default country (Pakistan)
describe_city("Karachi");



// Calling the function for another city in the default country (Pakistan):
describe_city("Peshawar");


// Calling the function for a city in a custom country (Canada):
describe_city("Toronto" , "Canada")
