//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.

//• Loop through the array.

//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line


// Array of numbers 1 through 9:
let My_Numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// Loop through the array and print ordinal numbers:
for(let i=0; i<My_Numbers.length; i++){

    

    if(My_Numbers[i] == 1)
    {

        console.log(`${My_Numbers[i]}st`);
    }
    else if(My_Numbers[i] == 2){

    console.log(`${My_Numbers[i]}nd`)
    }
    else if(My_Numbers[i] == 3){

        console.log(`${My_Numbers[i]}rd`)
    }
    else if(My_Numbers[i] == 4){
        console.log(`${My_Numbers[i]}th`);
    }
    else if(My_Numbers[i] == 5){
        console.log(`${My_Numbers[i]}th`)
    
    }
    else if(My_Numbers[i] == 6){
        console.log(`${My_Numbers[i]}th`);

    }
    else if(My_Numbers[i] == 7){

        console.log(`${My_Numbers[i]}th`);
    }
    else if(My_Numbers[i] == 8){
        console.log(`${My_Numbers[i]}th`);
    }
    else
        console.log(`${My_Numbers[i]}th`);
    }
    


