function decrypt(code, k) {
  let ans = new Array(code.length).fill(0);

  if (k > 0) {
    for (let i = 1; i <= k; i++) {
      ans[0] += code[i];
    }
    console.log("ans", ans);

    for (let i = 1; i < code.length; i++) {
      ans[i] = ans[i - 1] - code[i] + code[(i + k) % code.length];
    }
  } else if (k < 0) {
    for (let i = 1; i <= -k; i++) {
      ans[0] += code[code.length - i];
    }
    for (let i = 1; i < code.length; i++) {
      ans[i] = code[i - 1] + ans[i - 1] - code[mod(i - 1 + k, code.length)];
    }
  }

  return ans;

  //   if (k > 0) {
  //     let sum = 0;
  //     for (let i = 1; i <= k; i++) {
  //       sum += code[i];
  //     }
  //     ans[0] = sum;
  //     for (let i = 1; i < code.length; i++) {
  //       sum -= code[i];
  //       if (i + k < code.length) {
  //         sum += code[i + k];
  //       } else {
  //         let diff = i + k - code.length;
  //         sum += code[diff];
  //       }
  //       ans[i] = sum;
  //     }
  //     return ans;
  //   }

  //   if (k < 0) {
  //     let sum = 0;
  //     for (let i = 1; i <= -k; i++) {
  //       sum += code[code.length - i];
  //     }
  //     ans[0] = sum;

  //     for (let i = 1; i < ans.length; i++) {
  //       sum += code[i - 1];
  //       console.log(`add first ${sum}`);
  //       if (i + k <= 0) {
  //         console.log("?????????");
  //         sum -= code[ans.length - 1 + (i + k)];
  //       } else {
  //         console.log("!!!!", i + k - 1);
  //         sum -= code[i + k - 1];
  //       }
  //       ans[i] = sum;
  //       console.log("ans", ans);
  //     }
  //     return ans;
  //   }
}

function mod(a, b) {
  let test = ((a % b) + b) % b;
  console.log("test", test);
  return ((a % b) + b) % b;
}
console.log(decrypt([10, 5, 7, 7, 3, 2, 10, 3, 6, 9, 1, 6], 4));
