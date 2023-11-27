
const arr = [1, 2, [3, 5], { name: "Krupali" }];
function flatArr(arr) {
  const result = arr.reduce((acc, val) => {
    acc.concat(val);
  }, []);
  console.log(result);
  return result;
}
flatArr(arr);
