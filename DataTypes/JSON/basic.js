// JSON.stringify- convert to JSON
const obj = {
  name: "Krupali",
  age: 21,
  surname: "Patel",
  city: "Surat",
};
const json = JSON.stringify(obj);
console.log(typeof json); /* string */
console.log(json); /* 
                    {"name":"Krupali","age":21,"surname":"Patel","city":"Surat"}
                    In json no single quotes or backticks are used. property are also written in double quotes 
                    */

// JSON.stringify can be applied to primitive datatypes : number,string,boolean and null and can also applied to object ad array
let user = {
  sayHi() {
    alert("Hello"); // ignored
  },
  [Symbol("id")]: 123, // ignored 
  something: undefined, // ignored
};
console.log(JSON.stringify(user));

//  The important limitation: there must be no circular references.
