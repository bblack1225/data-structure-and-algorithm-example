const maxSum = (arr, size) => {
  if (size > arr.length) {
    return null;
  }
  let sum = calculateArrBySize(arr, size);
  4;
  let max = sum;
  for (let i = 0; i < arr.length - 2; i++) {
    sum -= arr[i];
    sum += arr[i + size];
    max = sum > max ? sum : max;
  }
  return max;
};

const minSum = (arr, size) => {
  if (size > arr.length) {
    return null;
  }
  let sum = calculateArrBySize(arr, size);
  let min = sum;
  for (let i = 0; i < arr.length - 2; i++) {
    sum -= arr[i];
    sum += arr[i + size];
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
const nums = [2, 7, 3, 0, 6, 1, 13, 5, 14, -6, -5, -12, -11];
const maxAns = maxSum(nums, 2);
const minAns = minSum(nums, 2);
console.log("max ans is ", maxAns);
console.log("min ans is ", minAns);
