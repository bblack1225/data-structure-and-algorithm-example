const nums = [
  5, 10, 12, 13, 19, 34, 37, 44, 49, 54, 54, 61, 63, 68, 74, 76, 79, 80, 85, 88,
  97, 99,
];
//二元搜尋法
const binarySearch = (arr, n) => {
  let min = 0;
  let max = arr.length - 1;
  while (min < max) {
    let middle = Math.floor((min + max) / 2);
    let currentNumber = arr[middle];
    if (currentNumber > n) {
      max = middle - 1;
    } else if (currentNumber < n) {
      min = middle + 1;
    } else if (currentNumber === n) {
      return middle;
    }
  }
  return -1;
};

let index = binarySearch(nums, 99);
console.log("index", index);
