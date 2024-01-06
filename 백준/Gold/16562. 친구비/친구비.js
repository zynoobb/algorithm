const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data.map((el) => el.split(" ").map(Number));

  const [[N, _, K], costs, ...edges] = arr;
  costs.unshift(0);

  const roots = {};
  for (let i = 1; i <= N; i++) roots[i] = i;

  function find(x) {
    if (x != roots[x]) roots[x] = find(roots[x]);
    return roots[x];
  }

  function union(a, b) {
    const x = find(a),
      y = find(b);

    if (costs[y] > costs[x]) roots[y] = x;
    else roots[x] = y;
  }

  edges.forEach(([a, b]) => union(a, b));

  const friends = new Set();
  let cnt = 0;

  for (let i = 1; i <= N; i++) {
    if (!friends.has(find(i))) {
      cnt += costs[roots[i]];
      friends.add(roots[i]);
    }
  }

  console.log(K >= cnt ? cnt : "Oh no");
}

solution(input);
