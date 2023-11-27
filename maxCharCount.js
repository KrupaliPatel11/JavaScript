
const str = "String";
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
    if(count[char] > maxCount) {
        maxChar = char;
        maxCount = count[char];
    }
  }
  
  
return `${maxChar} : ${maxCount}`;
}

const result = charCount(str);
console.log(result);
