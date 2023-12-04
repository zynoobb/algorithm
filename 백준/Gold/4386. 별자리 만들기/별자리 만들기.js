const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const n = +data.shift();
  const arr = data.map((el) => el.split(" ").map((v) => Math.floor(+v * 1000)));
  const edges = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const [x1, y1] = arr[i];
      const [x2, y2] = arr[j];
      const [xDist, yDist] = [Math.abs(x1 - x2), Math.abs(y1 - y2)];

      let dist = Math.floor(Math.sqrt(xDist ** 2 + yDist ** 2));
      if (xDist == 0 || yDist == 0) dist = xDist + yDist;

      edges.push([i + 1, j + 1, dist]);
    }
  }

  edges.sort((a, b) => a[2] - b[2]);

  const roots = {};
  for (let i = 1; i <= n; i++) {
    roots[i] = i;
  }
  function find(node) {
    if (roots[node] !== node) {
      roots[node] = find(roots[node]);
    }
    return roots[node];
  }

  function union(node1, node2) {
    const [root1, root2] = [find(node1), find(node2)];
    if (node1 < node2) roots[root2] = root1;
    else roots[root1] = root2;
  }

  let cur = 1;
  let result = 0;
  let idx = 0;
  while (cur < n) {
    const [s, e, w] = edges[idx++];
    if (find(s) !== find(e)) {
      result += w;
      union(s, e);
      cur++;
    }
  }

  console.log(result / 1000);
}

solution(input);
