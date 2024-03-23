const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [n, ...arr] = data.map(Number);

  const table = {},
    result = [];

  arr.forEach((el, idx) => (table[idx + 1] = el));

  let visited;

  function recursive(cnt, def) {
    visited[cnt] = true;
    const next = table[cnt];

    if (!visited[next]) recursive(next, def);
    else if (visited[next] && next === def) result.push(next);
  }

  for (let i = 1; i <= n; i++) {
    visited = Array.from({ length: n + 1 }, () => false);
    recursive(i, i);
  }

  result.sort((a, b) => a - b);
  console.log(result.length);
  console.log(result.join("\n"));
}

solution(input);
