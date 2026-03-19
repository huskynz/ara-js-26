function findMax(num1, num2, num3) {
  var max = num1;
  if (num2 > max) {
    max = num2;
  }
  if (num3 > max) {
    max = num3;
  }
  return max;
}

console.log(findMax(10, 20, 15));
console.log(findMax(-5, 0, -10));