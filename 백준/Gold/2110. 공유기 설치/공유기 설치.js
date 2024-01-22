const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [N, M] = data.shift().split(" ").map(Number);
  const arr = data.map(Number).sort((a, b) => a - b);

  let left = 1,
    right = arr.at(-1) - arr[0];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let cnt = 1,
      wifi = arr[0];

    for (let i = 1; i < N; i++) {
      if (arr[i] >= wifi + mid) {
        cnt++;
        wifi = arr[i];
      }
    }

    if (cnt >= M) left = mid + 1;
    else right = mid - 1;
  }

  console.log(right);
}

solution(input);
