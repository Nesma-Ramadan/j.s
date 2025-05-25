

//1- Write a program that allow to user enter number then print it 

// var number1 = Number(window.prompt('Enter a number'));
// console.log('Number = ' + number1);

// ///////////////////////////////////////////

/* 2- Write a program that take number from user then print yes if that number can divide by 3 
and 4 otherwise print no */

// var number2 = Number(window.prompt('Enter a number'));
// if (number2 % 3 === 0 && number2 % 4 === 0) {
//     console.log('Yes')
// }
// else {
//     console.log('No')
// }

// //////////////////////////////////

//  3- Write a program that allows the user to insert 2 integers then print the max 

// var number3 = Number(window.prompt('Enter a first number'));
// var number4 = Number(window.prompt('Enter a second number'));
// switch (true) {
//     case number3 > number4:
//         console.log(number3);
//         break;
//     default:
//         console.log(number4)
// }


// ANOTHER SOLUTION 


// if(number3>number4){
//     console.log(number3);
// }
// else{
//     console.log(number4)
// }

////////////////////////////////////

/*4- Write a program that allows the user to insert an integer then print negative if it is 
negative number otherwise print positive. */

// var number5 = Number(window.prompt('Enter a number to check if its negativ or positive'));

// if (number5 >= 0) {
//     console.log('Number: Negative')
// }
// else {
//     console.log('Numper: Positive')
// }


// ANOTHER SOLUTION


// switch(true){
//     case number5>=0:
//         console,console.log('Number: Negative');
//         break;
//         default:
//             console,console.log('Number: Positive');        
// }

////////////////////////////////////////

/* 5- Write a program that take 3 integers from user then print the max element 
and the min element. */

// var number6=Number(window.prompt('Enter a first number'));
// var number7=Number(window.prompt('Enter a second number'));
// var number8=Number(window.prompt('Enter a third number'));

// if(number6>number7 && number6>number8){
//     console.log('The max number= '+ number6);

// }
// else if(number7>number6 && number7>number8){
//     console.log('The max number= '+ number7);
// }
// else{
//     console.log('The max number= '+ number8);
// }
// if(number6<number7 && number6<number8){
//     console.log('The min number= '+ number6);
// }
// else if(number7<number6 && number7<number8){
//     console.log('The min number= '+ number7);
// }
// else{
//     console.log('The min number= '+ number8);
// }

///////////////////////////////////////////

/* 6-Write a program that allows the user to insert integer number then 
 check If a number is oven or odd */

//  var number9=Number(window.prompt('Enter a number to check if a number is oven or odd'));

//  if(number9%2 === 0){
//     console.log(number9 + ' '+'is oven')
//  }
//  else{
//     console.log(number9 +' '+'is odd')
//  }

//////////////////////////////////////////

/*7-Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
then print vowel otherwise print consonant*/

// var character = window.prompt('Enter a character');

// switch(true){
//     case character == 'a':
//     case character == 'e':
//     case character == 'i':
//     case character == 'o':
//     case character == 'u':
//         console.log(character+' '+'is vowel');
//         break;
//         default:
//             console.log(character+' '+'is consonant')
// }

// ANOTHER SOLUTION //

// if(character=='a'||character=='e'||character=='i'||character=='o'||character=='u'){
//     console.log(character+' '+'is vowel');
// }
// else{
//     console.log(character+' '+'is consonant');
// }


///////////////////////////////////////////////////////


/* 7-Write a program that allows user to insert integer then print all numbers between 1 to 
that’s number */

// var number10 = Number(window.prompt('Enter a number greater than 0'));

// for(var i=1; i<=number10; i++){
//     console.log(i);
// }


///////////////////////////////////////////////////////////


/* 8-Write a program that allows user to insert integer then print a multiplication table up to 12.  */

// var number11 = Number(window.prompt('enter a number'));

// for(var i=1; i<=12 ; i++){

//     console.log(number11 + 'x' + i + '=' + (number11*i));
// }


//////////////////////////////////////////////////////////

/* 9- Write a program that allows to user to insert number then print all even numbers 
between 1 to this number */

  // var number12=Number(window.prompt('Enter a number'));  

  // for ( var i =2 ; i<=number12; i++){

  //   if(i%2==0){
  //     console.log(i);
  //   }

  // }
  

  /////////////////////////////////////////////////////////////////////
    

  /* 10- Write a program that take two integers then print the power */

  // var base=Number(window.prompt('Enter the base number'));
  // var exponent=Number(window.prompt('Enter the exponent'));

  // console.log(base**exponent);


  /////////////////////////////////////////////////////////////

  /* 11- Write a program to enter marks of five subjects and calculate total, average and 
percentage. */


// var subject1 =Number(window.prompt('Enter mark the first subject'));
// var subject2 =Number(window.prompt('Enter mark the second subject'));
// var subject3 =Number(window.prompt('Enter mark the third subject'));
// var subject4 =Number(window.prompt('Enter mark the fourth subject'));
// var subject5 =Number(window.prompt('Enter mark the fifth subject'));

// console.log('Total works : '+ (subject1+subject2+subject3+subject4+subject5));
// console.log('Average     : '+ ((subject1+subject2+subject3+subject4+subject5)/5));
// console.log('percentage  : '+ ((subject1+subject2+subject3+subject4+subject5)/500*100)+'  '+'%');


//////////////////////////////////////////////////////////


/* 12--Write a program to input month number and print number of days in that 
month.*/

// var monthNum =Number(window.prompt('Enter mounth number'));

// switch (monthNum) {
//   case 1: // January
//   case 3: // March
//   case 5: // May
//   case 7: // July
//   case 8: // August
//   case 10: // October
//   case 12: // December
//     console.log("This month has 31 days.");
//     break;

//   case 4: // April
//   case 6: // June
//   case 9: // September
//   case 11: // November
//     console.log("This month has 30 days.");
//     break;

//   case 2: // February
//     console.log("This month has 28 days (29 in a leap year).");
//     break;

//   default:
//     console.log("Invalid month number! Please enter a number from 1 to 12.");
// }


/////////////////////////////////////////////

/* 14- Write a program to input marks of five subjects 
Physics, Chemistry, Biology, Mathematics and Computer 
  , Find percentage and grade */

  







