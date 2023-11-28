//  handlers-.then/catch/finally
let promise = new Promise(function (resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
}).then(() => {
  console.log("Resolved");
});

// immedialtely call resolve or reject
let promise1 = new Promise(function (resolve, reject) {
  reject( new Error("Rejected"));
});
promise1.then(
  (result) => console.log(result),
  (error) => console.log(error.name, error.message)
);

//  finally- finally will execute first before  then clause and give result or error
let promise2 = new Promise((resolve, reject) => {
  resolve("Resolved promise2");
})
  .finally(() => {
    console.log("This is from finally");
  })
  .then(
    (result) => console.log(result),
    (error) => console.log(error)
  );
