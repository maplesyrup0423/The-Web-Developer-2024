// DEFINE YOUR FUNCTION BELOW:
function sumArray(num) {
  let sum = 0;
  for (let index = 0; index < num.length; index++) {
    sum += num[index];
  }
  return sum;
}

// for...of
function sumArray2(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
