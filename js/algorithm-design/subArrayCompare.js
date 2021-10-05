const maxSum = (arr, size) => {
  if (size > arr.length) {
    return null;
  }
  let sum = calculateArrBySize(arr, size);
  let max = sum;
  for (let i = size; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - size];
    max = max > sum ? max : sum;
  }
  return max;
};

const minSum = (arr, size) => {
  if (size > arr.length) {
    return null;
  }
  let sum = calculateArrBySize(arr, size);
  let min = sum;
  for (let i = size; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - size];
    console.log("arr val", arr[i]);
    console.log("sum", sum);
    min = sum > min ? min : sum;
  }
  return min;
};

const calculateArrBySize = (arr, size) => {
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }
  return sum;
};
const nums = [2, 7, 3, 0, 6, 1, 300, 13, 100, 5, 14, -6, -5, -12, 200, -11, 99];
const maxAns = maxSum(nums, 3);
const minAns = minSum(nums, 2);
console.log("max ans is ", maxAns);
console.log("min ans is ", minAns);
