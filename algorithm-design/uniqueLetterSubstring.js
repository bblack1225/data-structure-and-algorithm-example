// 找到字串中連續不一樣字母的最大長度
const uniqueLetterSubstring = (str) => {
  let counter = {};
  let start = 0;
  let end = 0;
  let maxLength = 0;
  while (end < str.length) {
    if (counter[str[end]]) {
      counter[str[start]]--;
      start++;
    } else {
      counter[str[end]] = 1;
      end++;
      let currentLength = end - start;
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
    }
  }
  console.log("counter", counter);
  return maxLength;
};

console.log(uniqueLetterSubstring("thisishowyoudoit"));
