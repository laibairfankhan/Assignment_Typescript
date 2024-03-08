//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

//"Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value that’s returned.
//Creat function:

// Function to format city and country names:

function city_country(city: string, country: string):void{

// Print the formatted string containing the city and country:
    console.log(`"${city}, ${country}"`);
}



// Calling the function with Lahore, Pakistan:
city_country("Lahore","Pakistan");

// Calling the function with Chicago, America:
city_country("Chicago","America");

// Calling the function with Istanbul, Turkey:
city_country("Istanbul","Turkey");