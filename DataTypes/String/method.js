// string is immutable
// Methods
// 1. indexOf(start,positionFromWhereToStart)
const str = "widget with id";
console.log(str.indexOf("id")) /* will return 1 */
console.log(str.indexOf("widget"))
// console.log("id", 2) ;


// lastIndexOf(substr, position)
console.log(str.lastIndexOf("id"));

// includes(substr, position)- will return true if substr include in string otherwise false
console.log(str.includes("id"));
console.log(str.includes("idk"));

// endsWith(substr)-will return true if string end with substr otherwise false
console.log(str.endsWith("id"));

// startsWith(substr, position)-will return true if string start with substr otherwise false
console.log(str.startsWith("wid"));

// substring(start, end)(not including end)- it will treat negative value as 0
console.log(str.substring(2,5)); /* will return extracted out part */
console.log(str.substring(5,2))  /* subString also allow this... it will swaps start and end index but slice not allow this */

// slice(start,end)(not including end)- it allows negative values
console.log(str.slice(2,5));
console.log(str.slice(5,2)); /* will  return empty string */
console.log(str.slice(-4,-1));

// substr(start, length) - it allows negative start
console.log(str.substr(2,4)); /* will start with 2 and take 4 characters  */
console.log(str.substr(-6,2));

// trim - will remove whitespace and return string
const str1 = "  hello world     ";
console.log(str1.trim())
console.log(str1.trimStart());
console.log(str1.trimEnd());

// repeat(n)- will repeat string n times
console.log("String: \n ",str.repeat(2));






