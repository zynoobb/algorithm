const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, m], arr] = data.map((el) => el.split(" ").map(Number));

  const visited = Array.from({ length: n }, () => false);
  let result = 0;

  function backTracking(cnt, limit) {
    if (cnt === n) {
      result++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i] && limit + arr[i] - m >= 500) {
        visited[i] = true;
        backTracking(cnt + 1, limit + arr[i] - m);
        visited[i] = false;
      }
    }
  }

  backTracking(0, 500);

  console.log(result);
}

solution(input);
