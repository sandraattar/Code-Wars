function positiveSum(arr) {
  //store the sum
  let sum =0;

  //loop through the array
  for (var i=0; i < arr.length; i++){
  //check if the number is positive or negative
  //add the positive nums
  if (arr[i] > 0){
    let num= arr[i]
    sum += num
  }else{
   sum += 0;
  }
  }
  return sum

}
