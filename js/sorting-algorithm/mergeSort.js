function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }

  //return 利用遞迴(recursion)來完成，當被分裂成最小長度的array時，才開始合併。
  let middle = arr.length / 2;
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

let arr = [6, 4, 1, 3, 3, 9, 8, 11, 2, 14];
// console.log(mergeSort(arr));
console.log(merge([2], [4, 6, 7, 8, 9]));
