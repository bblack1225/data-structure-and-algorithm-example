//一個簡單的遞迴範例
function recursiveSequence(n) {
  if (n == 1) {
    return 10;
  }
  return recursiveSequence(n - 1) + 10;
}

console.log(recursiveSequence(10));
