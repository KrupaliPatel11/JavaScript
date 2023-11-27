
const str = "Hello";
function charCount(str) {
  let count = {};
  let maxCount = 0;
  let maxChar = "";
  let string = str.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }
  
  
return count;
}

const result = charCount(str);
console.log("Count:", result);
