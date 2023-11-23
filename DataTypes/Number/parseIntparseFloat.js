// +11px and Number(11px) will return NaN it is work in strict mode
console.log(+"11px"); /* will return NaN so need of parseInt and parseFloat */

console.log(parseInt("12.3"));
console.log(parseFloat("12.3.4"));
