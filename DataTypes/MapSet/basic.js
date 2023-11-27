const arr = [1,2,3,4,5,61,2,3,4,5];
const unique = [... new Set(arr)];
console.log(unique);

// Set allows only unique value
const set = new Set(arr);
console.log(set);
