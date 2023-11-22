// Nullish- a ?? b; if a is defined then a otherwise b
let user;
console.log(user ?? "default");
user = "Krupali";
console.log(user);

let firstname = null
let lastname = null
let surname = "Patel"

// both will done same thing but || will return truthy value while ?? will return defined value
console.log(firstname || lastname || surname || "Krupali");
console.log(firstname ?? lastname ?? surname ?? "Krupali");

// carefull while use nullish and ||
let height = 0
console.log(height || 100);
console.log(height ?? 100);