const frequency = (strA, strB) => {
  let counterA = {};
  let counterB = {};

  if (strA.length !== strB.length) {
    return false;
  }

  for (let i = 0; i < strA.length; i++) {
    counterA[strA[i]] = (counterA[strA[i]] ?? 0) + 1;
    counterB[strB[i]] = (counterB[strB[i]] ?? 0) + 1;
  }
  for (let indexA in counterA) {
    if (counterA[indexA] !== counterB[indexA]) {
      return false;
    }
  }
  return true;
};

console.log(frequency("aaabbzzs", "abbaassz"));
