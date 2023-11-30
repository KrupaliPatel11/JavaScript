// // // Practice with for-in loop
// // // 1
// // let salary = 0;

// // let salaries = {
// //   John: 100,
// //   Ann: 160,
// //   Pete: 130,
// // };
// // for (let val in salaries) {
// //   salary = salary += salaries[val];
// // }
// // console.log("salary:", salary );
// // console.log("")

// // // 2:Multiply numeric property value by 2
// // let obj = {
// //     age : 21,
// //     year : 2023,
// //     name : "Krupali"
// // }
// // for(let prop in obj) {
// //     // console.log(typeof(obj[prop]));
// //     if(typeof(obj[prop]) === "number") {
// //         obj[prop] = obj[prop] * 2
// //     }
// //     console.log(obj[prop]);
// // }


// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2
// };

// let arr = Array.from(arrayLike); // (*)
// console.log(arr)
// console.log(arr.pop())

// let range = "krupali";

// let arr2 = Array.from(range)
// console.log(arr2)

const obj  = {
  test() {
    setTimeout( function(){console.log(this)}, 1000)
  }
}