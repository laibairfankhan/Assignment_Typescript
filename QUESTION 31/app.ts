//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.


// Make an array of usernames, including 'Admin:
let Usernames: string[] = [`Admin`,` Arzoo`,` Humna`,` Nida`,` Liza`];

// Remove the all usernames:
//Usernames =  [];

// Check if the list of users is not empty:
//if(Usernames.length>0){



for(let i=0; i<Usernames.length; i++){

    
// Check if the current username is 'Admin:
if(Usernames[i] === `Admin`)

    {

        // Special greeting for the admin:
        console.log(`Hello Admin, would you like to see a status report?`);

    }

    else {
        //Generic greeting for other users:
       console.log(`Hello ${Usernames[i]}, Thank you for logging in again`);

    }
}
//}else{

//}// Print a message if the list is empty
//console.log(`We need to find some users!`);