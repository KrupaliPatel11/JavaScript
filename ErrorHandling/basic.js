try {
  console.log("Hello, This is from try");
  // from this error will occur to go to catch block
  krupali;
} catch (err) {
  console.log("This is from catch");
}

// in scheduled function we have to use try...catch  inside that function
setTimeout(function () {
  try {
    krupali;
  } catch (error) {
    console.log("Krupali is not defined");
  }
}, 1000);

// // this will cause an error
// try {
//   setTimeout(function () {
//     krupali;
//   }, 1000);
// } catch (error) {
//   console.log("error");
// }

let json = '{ "name" : "Krupali" }';
try {
  let user = JSON.parse(json);
  if (!user.surname) {
    throw new SyntaxError("Syntax Error");
  }
  console.log(user.surname);
} catch (error) {
  console.log("Syntax Error:", error.message);
}

let data = '{ "name" : "Krupali" }';
try {
  user = JSON.parse(data);
} catch (error) {
  throw error;
}
