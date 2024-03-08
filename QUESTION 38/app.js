"use strict";
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
//Creat a function:
function describe_city(city, country = "Pakistan") {
    //Print the City and Country Name:
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Peshawar");
//These is not  Default Country:
describe_city("Toronto", "Canada");
