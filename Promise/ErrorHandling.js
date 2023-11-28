//  Here promise1 and promise2 exactly work same
let promise1 = new Promise((resolve, reject) => {
  throw new Error("from promise1");
}).catch((error) => {
  console.log(error.name, error.message);
});

let promise2 = new Promise((resolve, reject) => {
  reject(new Error("from promise2"));
}).catch((error) => {
  console.log(error.name, error.message);
});

let promise3 = new Promise((resolve, reject) => {
  resolve(1);
})
  .then((result) => {
    // throw new Error("from promise3");
    krupali();
  })
  .catch((error) => {
    console.log(`${error.name} : ${error.message}`);
  });

// rethrowing error
let promise4 = new Promise((resolve, reject) => {
  krupali();
})
  .catch((error) => {
    if (error instanceof URIError) {
      console.log("URLError");
    } else {
      console.log("We cannot handle such error");
    }
    throw error; // from here execution jump from one catch to another in chain
  })
  .then(() => {
    console.log("This is from promise4");
  })
  .catch((error) => {
    console.log(`${error.name} : ${error.message}`);
  });
