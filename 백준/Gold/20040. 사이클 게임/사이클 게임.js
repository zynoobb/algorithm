const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const [[n, m], ...edges] = data.map((el) => el.split(" ").map(Number));

  const roots = {};
  for (let i = 1; i <= n; i++) roots[i] = i;

  function find(node) {
    if (roots[node] != node) roots[node] = find(roots[node]);
    return roots[node];
  }

  function union(a, b) {
    const rootA = find(a),
      rootB = find(b);

    if (rootA < rootB) roots[rootB] = rootA;
    else roots[rootA] = rootB;
  }

  for (let i = 0; i < m; i++) {
    const [s, e] = edges[i];
    if (find(s) == find(e)) {
      console.log(i + 1);
      return;
    }
    union(s, e);
  }
  console.log(0);
}

solution(input);
