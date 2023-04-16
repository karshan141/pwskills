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


function Rectengle(len,bre){
    this.lenghh = len;
    this.bread = bre;
    this.draw = function(){
        console.log("Hello")
    }

}
let obj1 = new Rectengle(5,3);
let obj2 = new Rectengle(5,5);


console.log(obj2.draw())