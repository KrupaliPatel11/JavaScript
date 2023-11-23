// 1. freeze method-to make object immutable
const obj1 = {
  name: "Krupali",
  age: 12,
};
Object.freeze(obj1);
obj1.name = "Kirti";
console.log(obj1.name);

// 2. assign(target, source) method-to copy object to another
const obj2 = {
  name: "Krupali",
  age: 21,
};
const obj3 = {
  name: "Kirti",
  city: "Surat",
};
const result = Object.assign(obj2, obj3);
//  result is target object and target object will overwritten if same property in source object
console.log(obj2);

//  3. create method - to create a new object using existing object
const user = {
  name: "User1",
  city: "Surat",
  hello : function () {
    console.log(`Here is ${this.name} from ${this.city}`)
  }
};
// new object me craeted using existing user object
const me = Object.create(user);
me.name ="Krupali"; /* here we are set name to object me but Krupali is set to user */
me.city = "ahmedabad"; /* value can overwrriten  */
me.hello(); /* Here is Krupali from ahmedabad */
user.hello();  /* Here is User1 from Surat */

// 4. entries method - will array consisting of [key, value] pair of object whcih is pass as param
const entries = Object.entries(user);
console.log(entries);

// 5. fromEntries - will convert list of key-value pair to object
const arr = [["num1" , "1"], ["num2" , '2'], ["num3" , "3"]];
const fromEntries = Object.fromEntries(arr);
console.log(fromEntries);

// 6. hasOwn(obj, "prop") method - will check property is in the object or not 
let obj4 = {
    name : "Krupali"
}
const prop = Object.hasOwn(obj4, "name");
const prop1 = Object.hasOwn(obj4, "toString");
const prop2 = Object.hasOwn(obj4, "valueOf");
console.log(prop);
// only return true for object's own property and in operator will return true for inherited property and own property
console.log(prop1);
console.log(prop2);
