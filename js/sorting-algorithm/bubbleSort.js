// let arr = [4, 6, 1, 3, 9, 8, 11, 2];
// function bubbleSort(arr) {
//   for (let i = 0; i <= arr.length - 2; i++) {
//     let swapping = false;
//     for (let j = arr.length - 1; j > i; j--) {
//       if (arr[j] < arr[j - 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//         swapping = true;
//       }
//     }
//     if (!swapping) {
//       break;
//     }
//   }
// }

// bubbleSort(arr);
// console.log(arr);

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    let swapping = false;
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swapping = true;
      }
    }
    if (!swapping) {
      break;
    }
  }
}

let arr = [4, 6, 1, 3, 9, 8, 11, 2];
bubbleSort(arr);
console.log("arr", arr);
