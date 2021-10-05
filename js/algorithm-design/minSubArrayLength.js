// const minSubArray = (arr, target) => {
//   let start = 0;
//   let end = 1;
//   let sum = arr[start];
//   let minLength = 0;
//   if (sum >= target) {
//     return 1;
//   }
//   sum += arr[end];
//   while (start < arr.length) {
//     if (sum >= target) {
//       sum = sum - arr[start];
//       start++;

//       console.log(
//         `start is ${start} and sum is ${sum} and min length is ${minLength}`
//       );
//       if (sum == target) {
//         minLength = end - start + 1;
//         if (minLength == 1) {
//           return 1;
//         }
//       }
//     }
//     if (end <= arr.length && sum < target) {
//       if (end == arr.length - 1) {
//         continue;
//       }
//       end++;
//       sum += arr[end];
//       console.log(`end is ${end} and sum is ${sum}`);
//     }
//   }
//   return minLength;
// };

const minSubArray = (arr, targetSum) => {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLength = Infinity;

  while (start < arr.length) {
    if (end < arr.length && sum < targetSum) {
      sum += arr[end];
      end++;
      console.log(`in first if end is ${end}, sum is ${sum}`);
    } else if (sum >= targetSum) {
      let currentLength = end - start;
      if (minLength > currentLength) {
        minLength = currentLength;
      }
      sum -= arr[start];
      start++;
      console.log(
        `in second if start is ${start} and end is ${end} and sum is ${sum}`
      );
    } else if (end >= arr.length) {
      break;
    }
  }
  if (minLength === Infinity) {
    console.log(
      "can not found sub array that can sum up to target ",
      targetSum
    );
    return -1;
  }
  return minLength;
};

const arr = [8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12];
const ans = minSubArray(arr, 45);
console.log("ans", ans);
