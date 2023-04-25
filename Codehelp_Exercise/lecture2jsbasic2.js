// let reclengle = {
//   length: 1,
//   breath: 2,

//   draw: function () {
//     console.log("Drawing Rectengle");
//   },
// };

// function createRectengle(len, bre) {
//   return (reclengle = {
//     length: len,
//     breath: bre,

//     draw: function () {
//       console.log("Drawing Rectengle");
//     },
//   });
// }
// console.log(createRectengle(5, 3));
// console.log(createRectengle(10, 5));

// function Rectengle(len,bre,tre){
//     this.lenghh = len;
//     this.bread = bre;
//     this.draw = function(str){
//         console.log(str)
//     }
// }
// let obj1 = new Rectengle(5,3);
// let obj2 = new Rectengle(5,5);

// // console.log(obj2.draw('523b'))

// for (const key in obj1) {
//     console.log(key,obj1[key])
// }

// for (const key of Object.entries(Rectengle)) {
//     console.log(key)
// }

// let no = [1, 3, 5, 7, 8, 9];
// console.log(no.includes(8));

// let students = [
//   { no: 1, name: "Raj" },
//   { no: 2, name: "ViRaj" },
//   { no: 3, name: "VrajRaj" },
//   { no: 4, name: "VrajRaj" },
// ];

// let finds = students.find((students) => {
//     if(students.name == "VrajRaj"){
//         console.log(

//         ) ;
//     }

// });
// console.log(finds);

// function search(nameKey, myArray) {
//   let copyArr = [];
//   let j = 0;
//   for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i].name === nameKey) {
//       copyArr[j] = myArray[i];
//       j++;
//     }
//   }
//   return copyArr;
// }

// const resultObject = search("VrajRaj", students);
// console.log(resultObject);

// let num = [1,2,3,4,];
// let num2  = num;

// let comb = num.concat(num2);

// console.log(comb);

// let new_com = comb.slice();
// console.log(new_com);

// 2.1 Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.

// function greet(name){
//     console.log(`Hello ${name} Bhai`)
// }

// greet("Rajesh")

// 2.2Write a function called 'getSquare' that takes a number parameter and returns its square.

// function getSquare(num){
//     return num*num;
// }
// // console.log(getSquare(5))

// //2.3 Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

// function countLetters(str) {
//   let count = [];
//   let getKey = false;
//   for (let i = 0; i <= str.length - 1; i++) {
//     getKey = isKeyExists(count, str[i]);
//     if (!getKey) {
//       let obj = {};

//       obj[str[i]] = 1;
//       count.push(obj);
//     }
//     else{
//         // let sss = str[i]
//         console.log(count[getKey].str[i] + 1)
//         // console.log(first)
//         count[getKey].l = 5
//     }

//   }

//   return count;
// }

// let keyArr = countLetters("hello World");
// console.log(keyArr);

// function isKeyExists(keyArr, key1) {
//   for (const key in keyArr) {
//     let isExist = key1 in keyArr[key];
//     if (isExist) {
//       return key;
//     }
//   }
//   return false;
// }

// // console.log(getKey);

// let students = [
//   { no: 1, name: "Raj" },
//   { nn: 2, name: "ViRaj" },
//   { nnn: 3, name: "VrajRaj" },
//   { n4: 4, name: "VrajRaj" },
// ];

// function search(nameKey, myArray) {
//   let copyArr = [];
//   let j = 0;
//   for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i].name === nameKey) {
//       copyArr[j] = myArray[i];
//       j++;
//     }
//   }
//   return copyArr;
// }

// const resultObject = search("VrajRaj", students);
// // console.log(resultObject);

// // console.log("")
// // students[1].nn = 555
// // console.log(students[1].nn)
// // console.log(students)

// function countLetters(str) {
//   // Create an empty object to store the letter counts
//   const counts = {};

//   // Loop through each character in the string
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     // Check if the character is already in the counts object
//     if (counts[char]) {
//       // If it is, increment the count by 1
//       counts[char]++;
//     } else {
//       // If it's not, add it to the object with a count of 1
//       counts[char] = 1;
//     }
//   }

//   // Return the counts object
//   return counts;
// }

// // Example usage:
// const letterCounts = countLetters("Hello world");

// console.log(letterCounts); // Output: { W: 1, e: 4, b: 1, D: 1, v: 1, l: 1, o: 1, p: 1, m: 1, n: 1, t: 1 }

// function countLetters(str) {
//   let count = {};
//   for (let i = 0; i <= str.length - 1; i++) {
//     const key = str[i];

//     count[key] = 1;
//   }
//   return count;
// }

// let keyArr = countLetters("Hello world");
// console.log(keyArr);

// function createCounter() {
//     let count = 0; // initialize count to 0

//     // define and return a function that increments count and returns its value
//     return function () {
//       count++; // increment count by 1
//       return count; // return the new value of count
//     };
//   }

//   // create a new counter function
//   const counter = createCounter();

//   // call the counter function multiple times and log the result
//   console.log(counter()); // prints 1
//   console.log(counter()); // prints 2
//   console.log(counter()); // prints 3
//   console.log(counter()); // prints 3

// function sumOfEven(arr) {
//     let arrNew = [];
//     for (const key in arr) {
//       if (arr[key].length > 5) {
//         arrNew.push(arr[key]);
//       }
//     }
//     return arrNew; 
// }

// let newArr = ["123456", "123", "123456789"];
// console.log(sumOfEven(newArr));


// function getKeys(per){
//     const key = Object.keys(per)
//     return key;
// }

// const person = {
//     name: "John",
//     age: 30,
//     gender: "male",
//     city: "New York",
//   };
  
// //   console.log(getKeys(person)); // ["name", "age", "gender", "city"]


// function getPropertyValues(people,name){
//     const value = people.map((obj)=> obj[name])
//     return value;
// }

// const people = [
//     { name: "Pranay", age: 20, gender: "male" },
//     { name: "Nidhi", age: 21, gender: "female" },
//     { name: "Soumya", age: 21, gender: "male" },
//   ];
  
//   console.log(getPropertyValues(people, "age")); // ["Pranay", "Nidhi", "Soumya"]


let newArr = [5,9,4,3,2];

console.log(newArr.sort().reverse());