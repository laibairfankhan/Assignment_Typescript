//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array
  


//Test 1 equality with string:
console.log(`Equality test with string:` ,  "Apple" == "Apple"  );
//Test 1 result  is True:
//Test 1 equality  with string: 
console.log(`Equality test with string:` , ("Apple" as string)  == "Banana");
//Test 1 result is false:


//Test 2 Inequality with string:
console.log(`Inequality test with string:` , ("Apple" as string) != "Banana");
//Test 2 reult true:
console.log(`Inequality test with string:` ,  "Apple" != "Apple");
//Test 2 resule false:


//Test 3  lower case function:
console.log(`Lower case function test:` , "SIR ZIA".toLocaleLowerCase()  == "sir zia");
//Test 3 result True:
console.log(`Lower case function test:` , "SIR ZIA".toLocaleLowerCase() == "SIR ZIA");
//Test 3 result False:


//Test 4 Equality with number:
console.log(`Equality test with number:` , 87 == 87);
//Test 4 result True:
console.log(`Equality test with number:` , ( 87 as number) == 78);
//Test 4 result False:


//Test 5 Inequality with number:
console.log(`Inequality test with number:` , (87 as number) != 78);
//Test 5 reult True:
console.log(`Inequality test with number:` , 87 != 87 );
//Test 5 result False:


//Test 6 Greater than with number:
console.log(`Greater than test with number:` , 87> 78);
//Test 6 result True:
console.log(`Greater than test with number:` , 87> 98);
//Test 6 result False:


//Test 7 Less than:
console.log(`Less than test with number:` , 78<87);
//Test  7 result True:
console.log(`Less than test with number` , 78<71);
//Test 7 result False:


//Test 8 Greater than equal to with number:
console.log(`Greater than equal to with number;` , 87>=87);
//Test 8 result True:
console.log(`Greater than equal to with number:` , 87>=97);
//Test 8 result False:


//Test 9 Less than equal to with number:
console.log(`Less than equal to with number:` , 87<=87);
//Test 9 result True:
console.log(`Less than rqual to with number:` , 87<=78);
//Test 9 result False:


//Test 10 And Operator:
console.log(`And Operator test with number:` , 87==87 && 87>9 );
//Test 10 result True:
console.log(`And Operator test with number:` , 78==78 && 8>78);
//Test 10 result False:


//Test 11 OR Operator:
console.log(`OR Operator test with number:` , ( 87 as number)!=78 || 87<9);
//Test 11 result True:
console.log(`OR Operator test with number:` ,  (8 as number)==7 || 8>89);
//Test 11 result False:


//Test 12 Whether Items in Array:
const Fruits : string[] = [`Orange`, `Apple`,` Banana`];
console.log(` Test "Apple" in the array:` , Fruits.includes("Apple"));
//Test 12 result True:
console.log(`Test "Orange" in the array:` , !Fruits.includes("Orange"));
//Test 12 result False:


//Test 13 Whether Items is not Array:
console.log(`Test "Graphes" is not in the array:` , !Fruits.includes("Graph"));
//Test 13 result True:
console.log(`Test "Graphes" is not in the Array:` , Fruits.includes("Graphes"));
//Test 13 result False: