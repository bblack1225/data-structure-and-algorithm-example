let heapSize;
let arr = [15, 3, 17, 28, 20, 2, 1, 4, 16, 22];
heapSort();
console.log("arr", arr);

function buildMaxHeap() {
  heapSize = arr.length - 1;
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    maxHeapify(i);
  }
  // console.log("final arr in build max heap", arr);
}

function maxHeapify(i) {
  // child mode
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  let largest;
  if (l <= heapSize && arr[l] > arr[i]) {
    largest = l;
  } else {
    largest = i;
  }

  if (r <= heapSize && arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest != i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    // console.log("in");
    maxHeapify(largest);
  }
  // console.log("largest", largest, "with value", arr[largest]);
  // console.log("!");
  // console.log("arr", arr);
}

function heapSort() {
  buildMaxHeap();
  // console.log("arr111", arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapSize -= 1;
    maxHeapify(0);
    // console.log("!");
    // console.log("arr222", arr);
  }
  // console.log("arr222", arr);
}
