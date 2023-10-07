// task 1: legal or illegal variables names 
// var myVariable="this is my string"   //legal
// var 123variable="this is my string"  //illegal
// var -special ="this is my string"    //illegal
// var first name="this is my string"   //illegal
// var 7eleven="this is my string"      //illegal
// var $price ="this is my string"       //legal
// var your-variable="this is my string" //illegal

// task 2: Assignmnt Opperators
// var total=10;
// total += 5; 
// total -= 3;
// total *= 2;
// console.log(total); // Output: 24
 
// task 3: Prompt and Variables(maths)
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");

// let sum = parseInt(num1) + parseInt(num2);

// alert("The sum of the two numbers is: " + sum);
 
// task 4: string concatenation
// let book_title = "selections from english verse";
// let author = "D.Y.MORGAN";
// let year_of_publication = 2012;

// let introduction = "The book " + book_title + " was written by " + author + " and was published in the year " + year_of_publication ;

// console.log(introduction);

// task 5: Checking even or odd
// let number = prompt("Please enter a number");

//     if (number % 2 === 0) {
//         alert(number + " is an even number.");
//     } else {
//         alert(number + " is an odd number.");
//     }

// task 6: Grade calculation
// let score = prompt("Please enter your exam score (out of 100)");
//   if (score >= 90) {
//     alert("You got an A");
//   } else if (score >= 80) {
//     alert("You got a B");
//   } else if (score >= 70) {
//     alert("You got a C");
//   } else if (score >= 60) {
//     alert("You got a D");
//   } else {
//     alert("You got an F");
//   }

// task 7 : Maximum of three numbers
// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let num3 = prompt("Enter the third number:");
// let max = Math.max(num1, num2, num3);
// alert(`The maximum of ${num1}, ${num2}, and ${num3} is ${max}.`);

// task 8 : odd or even sum
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum += i++;
//   }
// }
// console.log(" The sum of all even numbers from 1 to 100 is " + sum );

// task 9 :output
// var a=5 ; b=3 ; c=7 ;
// result=a++ - ++c + b + ++c - b++;
// console.log(a); //6
// console.log(b); //4
// console.log(c); //9
// console.log(result); //6

// var a=1 ; b=2 ; c=0 ;
// result=++a - --a+ ++c + c - a++ + --b;
// console.log(a); //2
// console.log(b); //1
// console.log(c); //1
// console.log(result); //3

// var a=2 ; b= 4; c=6;
// result=a++ - --b + c-- + b++ - ++c;
// console.log(a); //3
// console.log(b); //4
// console.log(c); //6
// console.log(result); //2

// var a= 10; b= 5; c=8;
// result=++a + --b - c++ - ++c + b--;
// console.log(a); //11
// console.log(b); //3
// console.log(c); //10
// console.log(result); //1

// var a= 3; b=2 ; c=1;
// result=b-- - --a + ++c - a++ + ++b - a;
// console.log(a); //3
// console.log(b); //2
// console.log(c); //2
// console.log(result); //-1

// var a= 1; b=5 ; c=3;
// result=++c + a-- - b++ + c-- - --a;
// console.log(a); //-1
// console.log(b); //6
// console.log(c); //3
// console.log(result); //5

// var a= 7; b=0 ; c=1;
// result=++c - a-- + --b + b++ - --c + c;
// console.log(a); //6
// console.log(b); //0
// console.log(c); //1
// console.log(result); //-7

// var a= 3; b= 4; c=9;
// result=--a + ++b + c-- - b++ + ++c - --c - --b;
// console.log(a); //2
// console.log(b); //5
// console.log(c); //8
// console.log(result); //7

// var a= 6; b=1 ; c=3;
// result=c++ - b + a-- - --c + b;
// console.log(a); //5
// console.log(b); //1
// console.log(c); //3
// console.log(result); //6

// var a= 10; b= 5; c=8;
// result=a + --b - c - ++c + b-- + a++;
// console.log(a); //11
// console.log(b); //3
// console.log(c); //9
// console.log(result); //11

// task 10: output ?
// console.log(undefined && false);  //output undefined
// console.log(true && false);  //output false
// console.log(true && undefined);  //output undefined
// console.log(undefined || undefined);  //output undefined
// console.log('undefined' || 'true');  //output undefined
// console.log(null || 'true');  //output true
// console.log(null || undefined);  //output undefined
// console.log(null && true || false );  //output false
// console.log(null && true || false && true);  //output false
// console.log(null && true || false && true);  //output false
// console.log((null && true) || (false && 1));  //output false

