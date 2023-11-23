// const str = "This is typical sentence";
const str = 123
function rev(word) {
  let rev = [];
  for (let i = word.length - 1; i >= 0; i--) {
    rev.push(word[i]);
  }
  return rev;
}
function reverse(str) {
  if (typeof str === "string") {
    let arr = str.split(" ");
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i].length > 5) {
        arr[i] = rev(arr[i]).join("");
      }
    }
    const finalResult = arr.join(" ")
    return finalResult;
  } else {
    console.log("Not valid");
  }
}
const result = reverse(str);
console.log(result)

