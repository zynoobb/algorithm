const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data.map((el) => el.split(" ").map(Number));
  const [n, _, t] = arr.shift();

  const roots = {};
  for (let i = 1; i <= n; i++) {
    roots[i] = i;
  }

  const find = (node) => {
    if (roots[node] !== node) roots[node] = find(roots[node]);
    return roots[node];
  };

  const union = (node1, node2) => {
    const [root1, root2] = [find(node1), find(node2)];
    if (node1 < node2) roots[root2] = root1;
    else roots[root1] = root2;
  };

  arr.sort((a, b) => a[2] - b[2]);

  let result = 0;
  let idx = 0;
  let connect = 1;

  while (connect < n) {
    const [s, e, w] = arr[idx++];
    if (find(s) != find(e)) {
      union(s, e);
      result += w + (connect - 1) * t;
      connect++;
    }
  }
  console.log(result);
}

solution(input);
