//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// Make a list of current users:
let current_users: string[] = [`Arzoo`,`Nida`,`Naziya`,`Humna`,`liza`,`Irha`];


// Make a list of new users:
 let new_users: string[] = [`Khadija`,`Arzoo`,`Dua`,`Hina`,`Liza`,`Asra`];


 
// Loop through each new user:
 new_users.forEach(new_user =>{

     // Convert new user to lowercase for case-insensitive comparison:
 let new_userLower = new_user.toLowerCase();



    // Check if the new username has already been taken:
 let userNameTaken = current_users.some(current_user => current_user.toLowerCase()
  === new_userLower); // True & False:

  
// Apply conditions and print the message:
  if(userNameTaken){
    console.log(`${new_user} need to choose a new user name because it's already taken.`);
}

else{

    console.log(`${new_user} is the new member added`);

    current_users.push(new_user) // Add new user to current user array:
}
 }
 )
console.log(current_users);//// Display the updated list of current users: