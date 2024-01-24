const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data[0];
  let result = 0;
  const rows = Array.from({ length: N }, () => 0);

  function verify(cnt) {
    for (let i = 0; i < cnt; i++) {
      if (rows[cnt] === rows[i] || Math.abs(rows[cnt] - rows[i]) === cnt - i) {
        return false;
      }
    }
    return true;
  }

  function DFS(cnt) {
    if (N === cnt) {
      result++;
      return;
    }

    for (let i = 0; i < N; i++) {
      rows[cnt] = i;

      if (verify(cnt)) {
        DFS(cnt + 1);
      }
    }
  }

  DFS(0);

  console.log(result);
}

solution(input);
