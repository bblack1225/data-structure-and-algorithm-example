// 找出所有一對一隊的平均值跟給予的值相同
const averagePair = (nums, avg) => {
  let left = 0;
  let right = nums.length - 1;
  let ans = [];
  let count = 0;
  while (right > left) {
    let val = (nums[left] + nums[right]) / 2;
    if (val > avg) {
      right--;
      count++;
    } else if (val < avg) {
      left++;
    } else if (val === avg) {
      ans.push([nums[left], nums[right]]);
      left++;
      right--;
      count++;
    }
  }
  console.log("count-", count);
  return ans;
};

const arr = [-21, -11, 0, 1, 2, 3, 9, 14, 17, 21, 24];
console.log(averagePair(arr, 1.5));
