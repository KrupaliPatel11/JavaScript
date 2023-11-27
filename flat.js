
// const arr = [1, 2, [3, 4], { name: "Krupali" }];
// console.log(typeof arr[2]);
// function flatArr(arr) {
//   let flat = [];
//   arr.forEach((ele) => {
//     if (ele.isArray(arr)) {
//         flat(ele)
//     } else {
//       flat.push(ele);
//     }
//   });
//   return flat;
// }
// flatArr(arr);

const arr = [1, 2, [3, 5], { name: "Krupali" }];
function flatArr(arr) {
  let initial = [];
  const result = arr.reduce((acc, val) => {
    acc.concat(val);
  }, initial);
  console.log(result);
  return result;
}
flatArr(arr);
