const arr = [-15, 3, 17, -17, 3.1415, 18, 20, 2, 1, 666, 50, 4];
let count = 0;
quickSort(0, arr.length - 1);
function quickSort(p, r) {
  if (p < r) {
    let q = partition(p, r);
    quickSort(p, q - 1);
    quickSort(q + 1, r);
  }
}

function partition(p, r) {
  let pivotVal = arr[r];
  let i = p - 1;

  for (let j = p; j <= r - 1; j++) {
    count++;
    if (arr[j] <= pivotVal) {
      i += 1;
      swap(i, j);
    }
  }
  swap(i + 1, r);
  return i + 1;
}

function swap(a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
