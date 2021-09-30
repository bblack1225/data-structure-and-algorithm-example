//字串倒裝
const isPalindromeStr = (str) => {
  let left = 0;
  let right = str.length - 1;
  let count = 0;
  while (right > left) {
    if (str[left] !== str[right]) {
      console.log(`it takes ${count} times in false`);
      return false;
    } else {
      left++;
      right--;
      count++;
    }
  }
  console.log(`it takes ${count} times in true`);
  return true;
};

console.log(isPalindromeStr("foobar"));
console.log(isPalindromeStr("awesome"));
console.log(isPalindromeStr("awesome"));
console.log(isPalindromeStr("tacocat"));
