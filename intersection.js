// this one should be O(n^2)
// because time complexity of indexOf() method is O(n), it's bad idea to use indexOf() inside for loop
const intersectionArr = (arr1, arr2) => {
  let ans = new Set();
  for (let i = 0; i < arr1.length; i++) {
    let value = arr1[i];
    if (arr2.indexOf(value) != -1) {
      ans.add(value);
    }
  }
  return [...ans];
};

let ans = intersectionArr([1, 2, 3, 3, 6, 6, 7], [1, 4, 6, 9, 10, 11, 13]);
console.log("ans1", ans);

// O(n)
const intersectionArrWithCounter = (arr1, arr2) => {
  let ans = [];
  let counter = {};
  let totalArr = arr1.concat(arr2);

  for (let i = 0; i < totalArr.length; i++) {
    let currentVal = totalArr[i];
    if (!counter[currentVal]) {
      counter[currentVal] = 1;
    } else {
      counter[currentVal]++;
    }
  }

  for (let key in counter) {
    if (counter[key] >= 2) {
      ans.push(counter[key]);
    }
  }
  return ans;
};

let ans2 = intersectionArr([1, 2, 3, 3, 6, 6, 7], [1, 4, 6, 9, 10, 11, 13]);
console.log("ans2", ans2);
