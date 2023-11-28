//  1. Promise.all
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((reject) =>
    setTimeout(() => reject(new Error("Error at promise 2")), 0)
  ), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 0)), // 3
]).then(
  (result) => console.log(result),
  (error) => console.log(error)
);

// 2.Promise.allSettled


// 5. Promise.resolve- we have to anything we desire to resolve
let promise = Promise.resolve("Thisisresolved");
console.log(promise);
promise
  .then((value) => {
    console.log(value);
  })
  .catch((e) => console.log(e));

// 6. Promise.reject
let promise1 = Promise.reject("Error");
let promise2 = Promise.resolve(promise1);
promise2
.then((result) => console.log(result))
.catch((e) => console.log(e));
