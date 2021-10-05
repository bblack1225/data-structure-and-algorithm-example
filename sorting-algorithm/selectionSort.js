function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      let currentVal = arr[j];
      if (currentVal < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

let arr = [6, 4, 1, 3, 3, 9, 8, 11, 2];
selectionSort(arr);
console.log(arr);
