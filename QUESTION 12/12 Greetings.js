"use strict";
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
const Friends_Name = [` Arzoo `, ` Liza `, ` Naziya`, ` Esha `];
const message = `You are invited my Birthday Party`;
for (let i = 0; i < Friends_Name.length; i++) {
    console.log(message + Friends_Name[i]);
}
