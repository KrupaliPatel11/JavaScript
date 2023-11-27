// Array is ordered collection
// const arr1 = new Array();
const arr1 = [
    "Apple",
    {name : "Krupali"},
    true,
    function () {
        console.log("hello")
    }
];
// to access element of array
console.log(arr1[1].name); /* accessing object */ 
console.log(arr1[2]); 
arr1[3]();
console.log(arr1[arr1.length - 2]) /* accesing fucntion */


// length in array is writable
const arr = [ "One", "Two", "Three"];
arr1.length = 2; 
// from now array length is 2 thats why element of array are One and Two only
console.log(arr[2]); /* will return undefined */

console.log([] + 1); /* 1 */
console.log([1] + 1); /* 11 */
console.log([1,2] + 3) /* 1,23 */

console.log("" + 1); /* 1 */
console.log("1" + 1); /* 11 */
console.log("1,2" + 3) /* 1,23 */ 
 
console.log(0 == []); /* true- it convert empty array to primitive  */
console.log("0" == []); /* false- it convert empty array to empty string hence "0" == " " is false */

