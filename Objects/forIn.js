// Practice with for-in loop
// 1
let salary = 0;

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
for (let val in salaries) {
  salary = salary += salaries[val];
}
console.log("salary:", salary );
console.log("")

// 2:Multiply numeric property value by 2
let obj = {
    age : 21,
    year : 2023,
    name : "Krupali"
}
for(let prop in obj) {
    // console.log(typeof(obj[prop]));
    if(typeof(obj[prop]) === "number") {
        obj[prop] = obj[prop] * 2
    }
    console.log(obj[prop]);
}

