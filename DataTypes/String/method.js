// string is immutable
// Methods
// 1. indexOf(start,positionFromWhereToStart)
const str = "widget with id"
console.log(str.indexOf("id")) /* will return 1 */
// console.log("id", 2) ; /* 

// const person1 = {
//     name : "Krupali"
// }

const person1 = {  first: "wes",  last: "bos", details: {age: 20, year: 2002}};
const persion = {...person1}
persion.details.year = 2003;
console.log(persion)
