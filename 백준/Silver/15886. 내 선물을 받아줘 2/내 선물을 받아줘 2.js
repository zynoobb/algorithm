const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [len, map] = data.map((x) => (isNaN(x) ? x : +x));

  const visited = Array.from({ length: len }, () => 0);
  let result = 0;

  const dfs = (x) => {
    // 되돌아온 경우 체크
    if (visited[x] === 1) {
      result++;
      return;
    }

    if (visited[x] === 2) return;

    visited[x] = 1;
    const next = map[x] === "E" ? x + 1 : x - 1;

    dfs(next);
    // 탐색 완료된 경우
    visited[x] = 2;
  };

  for (let i = 0; i < len; i++) {
    if (visited[i] === 0) {
      dfs(i);
    }
  }

  console.log(result);
}

solution(input);
