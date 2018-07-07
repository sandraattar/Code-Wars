var countSheep = function (num){
let  text =   ``
//loop through the numbers up to the given
for(var i=1; i<=num; i++){
  //use template literal to input numbers into the string
   text += `${i} sheep...`
}
return text

}
