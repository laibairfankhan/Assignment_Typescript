"use strict";
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
//Make a array UserNames and with include Admin Name:
const UserNames = [`Admin`, ` Arzoo`, ` Humna`, ` Nida`, ` Liza`];
for (let i = 0; i < UserNames.length; i++) {
    if (UserNames[i] === `Admin`) {
        console.log(`Hello Admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${UserNames[i]}, Thank you for logging in again`);
    }
}
