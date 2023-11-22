let user = {
    name : "Krupali",
    surname : "Patel",
    study : {
        hsc : "Surat",
        degree : "Bvn"
    }
}

console.log(user.name ? "yes" : "No");
console.log(user?.study?.hsc);
console.log(user.study?.degree);
console.log("")

// ?. can also use with fuction and brackets
let admin = {
    name : "Krupali",
    greet() {
        console.log("hello");
    }
}
console.log(admin?.["name"]);
console.log(admin?.["surname"]);
