function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
  }
}

let arr = [6, 4, 1, 3, 3, 9, 8, 11, 2];
// let arr = [1, 2, 3, 4, 5];
console.log("before arr", arr);
insertionSort(arr);
console.log("after arr", arr);
