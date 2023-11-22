// constructor funcation
function User(firstname, lastname) {
    this.firstname = firstname,
    this.lastname = lastname,
    // add method to function
    this.fullName = function() {
       return  this.firstname + " " + this.lastname
    }
}

// create object and access constructor function using new
const user1 = new User("Krupali", "Patel");
console.log("user1:", user1);
const user2 = new User("Kirti", "Patel");
console.log("user2:", user2);

// add property to user1
user1.age = 18;
console.log("user1 with age:", user1);

// add method to user2
user2.greet = () => {
    console.log("Hello from user2")
}
user2.greet();
console.log("fullname:",user1.fullName());

// test the contructor function- whether excuted part is using the new operator or not
function test() {
    console.log("test:", new.target)
}
// will result in undefined bcz without new operator
test();
new test();

// return from constructor function-it has no return statement
function NoReturn() {
    this.name = "ReturnStatementOfthisKeyword"
    return ;
}
console.log(new NoReturn().name);


function Return() {
    this.name = "willnotprint"
    return {name : "Krupali"}
}
console.log(new Return().name);

function Calc() {
    this.value = function() {
        this.a = +prompt("Enter a number", "");
        this.b = +prompt("Enter a number", "");
    },
    this.sum = function() {
        return this.a + this.b
    }
    this.multiply = function() {
        return this.a * this.b
    }
}
let calc = new Calc();
calc.value()
alert(calc.sum());
alert(calc.multiply());






