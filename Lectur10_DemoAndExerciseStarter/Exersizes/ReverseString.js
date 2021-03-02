let num = 25368;
function ReverseString(num){
   let n = num.toString();
  let arr = n.split("").reverse().join("");
  document.write(arr);
}
