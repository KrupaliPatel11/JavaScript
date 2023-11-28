// promise chaining
let promise = new Promise((resolve, reject) => {
  resolve(1);
})
  .then(function (result) {
    console.log("Result from chaining:", result);
    return result * 2;
  })
  .then(function (result) {
    console.log("Result from chaining:", result);
    return result * 2;
  })
  .then(function (result) {
    console.log("Result from chaining:", result);
    return result * 2;
  });

// Not chaining- in this .then apply to only single promise all .then will work independelty and not seding result to each other
let promise1 = new Promise((resolve, reject) => {
  resolve(1);
});
//  here all will give result 1
promise1.then(function (result) {
  console.log(result);
  return result * 2;
});
promise1.then(function (result) {
  console.log(result);
  return result * 2;
});
promise1.then(function (result) {
  console.log(result);
  return result * 2;
});

// returning promises
let promise2 = new Promise((resolve, reject) => {
  resolve(1);
})
  .then(function (result) {
    console.log("Result from promise3:", result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 2000);
    });
  })
  .then(function (result) {
    console.log("Result from promise3:", result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 3000);
    });
  });
