const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];
  const arr = data[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let sum = Infinity;
  let result;

  for (let i = 0; i < N - 2; i++) {
    const fix = arr[i];
    let left = i + 1,
      right = N - 1;

    while (left < right) {
      const cnt = fix + arr[left] + arr[right];

      if (Math.abs(cnt) <= Math.abs(sum)) {
        result = [fix, arr[left], arr[right]];
        sum = cnt;
      }

      if (cnt === 0) {
        console.log(...result);
        process.exit();
      } else if (cnt < 0) left++;
      else right--;
    }
  }
  console.log(...result);
}

solution(input);
