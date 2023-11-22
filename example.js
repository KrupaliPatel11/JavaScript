// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// // var filter = function(arr, fn) {

// // };

// let arr = [0, 10, 20, 30];
// function filter(arr) {
//   let filterredArr = [];
//   for (let i = 0; i <= arr.length-1; i++) {
//     if (arr[i] > 10) {
//       filterredArr = filterredArr.push(arr[i]);
//       return filterredArr;
//     }
// }
// }
// filter(arr);
// const newArray = filter(arr, fn);
const arr = [0, 10, 20, 30, 40];
function filter(arr, fn) {
  const fileteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      fileteredArr.push(arr[i]);
    }
    return filteredArr;
  }
}
