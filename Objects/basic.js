let user = {
  name: "Krupali",
  age: 21,
  "from where": "surat",
};
// access property
let prop = user.name;
// let prop = user["name"];
console.log(prop);
console.log("");

//add new property
user.isUser = true;
console.log(user.isUser);
console.log("");

// delete property
delete user.isUser;
console.log(user.isUser);
console.log("");

// multiword property name access
console.log(user["from where"]);
console.log("");

// for-in loop
for (let key in user) {
  console.log(key, ":", user[key]);
}

console.log("");

// check empltiness of object
let obj = {};
for (let key in obj) {
  return false;
}
console.log("Empty");

console.log("");






