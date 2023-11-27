const map1 = new Map([
  [1, "Krupali"],
  ["2", "kirti"],
]);
console.log(map1);

// Methods of map
console.log(map1.set(12, "patel"));
console.log(map1.get(12));
console.log(map1.has(32));
console.log(map1.delete(12));
console.log(map1.size);
console.log(map1.clear());
console.log(map1);

// iteration over map
// for...of
const map =  new Map([
    [1, "Krupali"],
    ["2", "kirti"],
  ]);
//  map.keys()
for(let key of map.keys()) {
     console.log("key:", key);
}
// map.values()
for(let value of map.values()) {
    console.log("values:" , value);
}


// to key/value pair from object
const obj = {
    name : "Krupali",
    surname : "Patel"
}
const result = Object.entries(obj)
console.log(result);
// now convert to map
const map2 = new Map(result);
console.log(map2)
console.log(map2.get("surname"));

// object from map
const obj2 = Object.fromEntries(map2)
console.log(obj2)
console.log(obj2.name)
