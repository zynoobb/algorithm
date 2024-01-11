const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];

  if (N == 1) {
    console.log("Yes");
    return;
  }

  let [K, ...arr] = data[1].split(" ").map(Number);
  let i = 0;
  arr.sort();

  let result = true;
  while (i < N - 1) {
    if (K > arr[i]) K += arr[i];
    else {
      result = false;
      break;
    }
    i++;
  }

  console.log(result ? "Yes" : "No");
}

solution(input);
