let id = Symbol("id");
let id1 = Symbol("id");

console.log(id == id1);
console.log(id1.description);
console.log(id.toString());
console.log("")

let id2 = Symbol("id")
let user = {
    name : "Krupali",
    age : 21,
    [id2] : 123
}

// symbols are skipped by for..
for(let key in user) {
    console.log(key)
}

console.log(false || 0 || null || "")