function reverse(str) {
  let arr = str.split(" ");
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i].length > 5) {
      console.log(arr[i].length);
      arr[i] = arr[i].split("").reverse().join("");
    }
  }
  const res = arr.join(" ");
  return res;
}

const res = reverse(str);
console.log(res);
