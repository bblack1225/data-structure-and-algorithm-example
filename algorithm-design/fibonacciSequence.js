//斐波那契數列
function fs(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return fs(n - 1) + fs(n - 2);
}

for (let i = 0; i <= 10; i++) {
  console.log(fs(i));
}
