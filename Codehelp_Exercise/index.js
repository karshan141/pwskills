// 1. Write a function that takes two numbers as arguments and returns their sum.
// function sum(num1,num2){
//     let sum = num1 + num2;
//     console.log(sum);
// }
// sum(5,10);

// 2. Write a function that takes a string as an argument and returns its length.
// function countStringLenght(strig){
//     let stringLenght = strig.length;
//     return stringLenght;
// }

// console.log(countStringLenght("CodeHelp"));

// 3. Write a program that takes two numbers and displays their sum, difference, product, and quotient.

// function sum(num1,num2){
//     const sum = num1 + num2;

//      const result = `Sum is ${sum} : Difference is ${num1 - num2} : Product is ${num1 * num2}`;
//      return result;
// }
// console.log(sum(5,10));

// 4. Write a function that takes two numbers as arguments and returns the larger number

// function largeNumber(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }
// console.log(largeNumber(5, 10));

// 5. Write a program that displays a string in reverse order.

// function reverseString(str) {
// //   let reverseStr="";
// //   for (let i = str.length - 1; i >= 0; i--) {
// //     reverseStr += str[i];
// //   }
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("12345"));

// let str = "Hello";
// console.log(str.split("").reverse().join(""));
// // console.log(str);

// let newArray = ['1','2','3'];

// console.log(newArray.join(""));

// 6. Write a program that takes a number and checks whether it is positive, negative, or zero.

// function checkNumber(num){
//     if(num>0){
//         return "Number Is Positive";
//     }
//     else if(num<0){
//         return "Number is nagative";
//     }
//     else{
//         return "zero";
//     }
// }
// console.log(checkNumber(0));

// 7. Write a program that takes a number and prints the multiplication table for that number.

// function multiplicationTable(num1,num2){

//     for(let i=1;i<=num2;i++){
//         console.log(`${num1} x ${i} = ${num1 * i}`);
//     }
// }

// multiplicationTable(1,5);

// 8. Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

// function sumOfNumber(num){
//     let sum=0;
//     for (let i = 1 ; i<=num ; i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sumOfNumber(10))

// 9. Write a program that takes a string and prints out the number of vowels in the string.

// function printVovelFromString(str) {
//   let vovels = ['a','e','i','o','u'];
//   let count = "";
//   for (let i = 0; i < str.length; i++) {    
//     // let charCode =  str[i].charCodeAt();
//     // if (charCode == 65 || charCode == 69 || charCode == 73 || charCode == 79 || charCode == 85) {
//     //   vovel += str[i];

//     if (vovels.includes(str[i].toLowerCase())) {
//         count+= str[i];
//       }
//     }
//   return count;
// }
// console.log(printVovelFromString("AellE"));
// const str = "AE"
// console.log(str[1].charCodeAt());

// 10. Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.

// function commonElements(arr1,arr2){
//     // console.log(arr1.lenghth);
//     let common = [];
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]==arr2[j]){
//                 if(!common.includes(arr1[i]))
//                 common.push(arr1[i])
//             }
//         }
//     }
//     return common.sort();
// }

// arr1 = [1,3,2,4,5,5];
// arr2 = [3,2,4,5,6,7];

// console.log(commonElements(arr1,arr2)); 
