
// to check NaN value isNaN(val) is used. it first convert its arguments to number
// NaN is not == and === to anything including itself
console.log(isNaN(NaN)); /* true */
console.log(isNaN("str")); /* true */

console.log(isFinite("15")); /* isFinite will convert "15" to number then return result for "15" it will result true */
console.log(isFinite(Infinity)) /* False bcz it is special value and it is infinity not finite */
console.log(isFinite("str")); /* false bcz special value : NaN */