"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let person_name = "iRfan";
//lowerCase
console.log(person_name.toLocaleLowerCase());
//uppercase
console.log(person_name.toLocaleUpperCase());
//titleCase
console.log(person_name.charAt(0).toLocaleUpperCase() + person_name.slice(1).toLocaleLowerCase());
