const arr = [10, 11, 15, 17, 16, 20, 55, 63];

const linearSearch = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) return i;
  }
  return -1;
};

console.log(linearSearch(arr, 99));
