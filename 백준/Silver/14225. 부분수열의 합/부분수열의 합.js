const { verify } = require("crypto");
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[N], arr] = data.map((el) => el.split(" ").map(Number));

  const table = {};

  function DFS(sum, cnt) {
    if (cnt === N) return;

    sum += arr[cnt];
    table[sum] = true;
    DFS(sum, cnt + 1);
    DFS(sum - arr[cnt], cnt + 1);
  }

  DFS(0, 0);

  let idx = 1;
  while (true) {
    if (!table[idx]) {
      console.log(idx);
      return;
    }
    idx++;
  }
}

solution(input);
