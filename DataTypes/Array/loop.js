const arr = [ "Apple", "Orange", "Pear", "WM"];
const length = arr.length;

//  for
for(let i =0; i< length; i++) {
    console.log(arr[i]);
}

// for...of- loop preffrable for array
for(let element of arr) {
    console.log(element)
}

// for...in
for(let key in arr) {
    console.log(key) /* will return key */
    console.log(arr[key]) /* will return value of key = element */
}




