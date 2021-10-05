// 檢查兩個單字的字母出現順序是否一致
const subsequenceProblem = (strA, strB) => {
  let pointerA = 0;
  let pointerB = 0;
  while (pointerB < strB.length) {
    if (strA.length == 0) {
      return true;
    }
    if (strA[pointerA] === strB[pointerB]) {
      pointerA++;
    }
    if (pointerA >= strA.length) {
      return true;
    }
    pointerB++;
  }
  return false;
};

console.log("subsequenceProblem", subsequenceProblem("aaa", "acavvva"));
