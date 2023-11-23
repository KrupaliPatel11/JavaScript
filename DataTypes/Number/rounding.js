// Rouding methods - Math.floor, Math.ceil, Math.truc, Math.round

// for example to get  1.2345656 to 1.23
const num = 1.2345656;
const res = Math.round(num * 100) / 100;
console.log(res);

// toFixed(n) will provide n decimals count but in string form
const num2 = 1.23;
const num3 = 1.27
const res2 = num2.toFixed(1);
const res3 = num3.toFixed(1)
console.log(res2);
// will work like Math.round for 1.27 will return "1.3" 
console.log(res3);
// to convert it to number we can use unary plus or Number
console.log(+res3, "or", Number(res3));

// 0.1 + 0.2 == 0.3  and 0.1 + 0.2 === 0.3 will return false bcz in floating-point can't be represented precisly in base2

