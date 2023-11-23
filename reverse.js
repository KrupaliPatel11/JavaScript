const str = "typical";
function rev(str) {
  let rev = [];
  if (typeof str == "string") {
    for (let i = str.length - 1; i >= 0; i--) {
      rev.push(str[i]);
    }
  } else {
    console.log("This function only accpet string");
  }
  return rev;
}
const res = rev(str).join("");
console.log(res);
