function sum1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}
let startTime1 = Date.now();
console.log(sum1(1500000000000));
let endTime1 = Date.now();
console.log("total seconds in sum1", endTime1 - startTime1);

function sum2(n) {
  return ((1 + n) * n) / 2;
}
let startTime2 = Date.now();
console.log(sum2(1500000000000));
let endTime2 = Date.now();
console.log("total seconds in sum2", endTime2 - startTime2);
