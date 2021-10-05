let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];
const ansArr = arrayOfArrays(arrs);
console.log(ansArr);
console.log(ansArr[2]);

function arrayOfArrays(arr1) {
  let ans = [];
  helper(arr1);
  return ans;
  //可以在內部再寫一個function來負責處理遞迴
  function helper(arr2) {
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i])) {
        helper(arr2[i]);
      } else {
        ans.push(arr2[i]);
      }
    }
  }
}
