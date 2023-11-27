// searching methods
const arr = ["Apple", "Orange", "Banana"];
const arr1 = ["One", "Two", "Three"];

// pop- will remove last element of an array and return it
console.log(arr.pop());
// shift- will remove first element of an array and return it
console.log(arr.shift());
console.log(arr);

// push- will add element at begining of an array and will return length of an array
console.log(arr.push("Pear", "SB"));
console.log(arr);
// unshift- will add element at the begining and will return length
console.log(arr.unshift("ABC"));

// concat- to merge two or more array
console.log("Concat:", arr.concat(arr1));

// entries- will return entries in array like key/value
const entry = arr1.entries();
for (let k of entry) {
  console.log(k);
}

// every() - will take function and check run that function to each array element
// will return true if all element pass function otherwise false
// will not work on empty array and original array will not change

// splice(start, deleteCount, [ele1, ele2... ,eleN]);
const arr3 = ["k", "r", "u", "p"];
const result = arr3.splice(1, 0, "j");
// return element which are removed
console.log(result); /* [] */
console.log(arr3);

// extract element from an array here end index is exclusive
console.log(arr3.slice(0, 4));

// forEach- will run function for every element of array
arr3.forEach((index) => {
  console.log(index);
});

// indexOf(element) - return index of element if no such element then return -1
console.log(arr3.indexOf("r"));
console.log(arr3.indexOf("t")); /* -1 */

// includes() - will return true if element exists in array otherwise false
console.log(arr3.includes("Krupali"));

// find() - return first element that match and if there is no match then return undefined
const arr4 = [3, 15, 18, 20, 18];
function age(val) {
  return val === 18;
}
const result1 = arr4.find(age);
console.log(result1);

// findIndex
const findIndex = arr4.findIndex(age);
console.log("findIndex", findIndex);

// filter- work same as find but will return an array of all matching element
const filter = arr4.filter(age);
console.log(filter);

// trasforming method
//  map- will run function to each element of array and return array of result
function mapFunc(item) {
  return item.length;
}
const map = arr.map(mapFunc);
console.log(map);

// sort(n) - will sort in alphabatically
const sort = arr4.sort();
// to sort numeric array we have use another way
console.log(sort);
// numeric sort
const numSort = arr4.sort(
  function (a, b) {
  return a - b;
});
console.log(numSort);

// skipped- reverse, join, split, isArray

// Array.isArray()
const obj = {};
console.log(typeof(obj), typeof(arr)) /* will return object for both don't return pure type of array */
console.log(Array.isArray(obj)); /* false */
console.log(Array.isArray(arr)); /* true */

