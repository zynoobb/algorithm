const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const arr = data.map((el) => el.split(" ").map(Number));
  const testCase = [];

  for (let i = 0; i < arr.length; i++) {
    const [n, m] = arr[i];
    if (n == 0 && m == 0) break;
    testCase.push(arr.slice(i, i + m + 1));
    i += m;
  }

  const result = testCase.map((el, idx) => act(idx, el));
  console.log(result.join("\n"));
}

function act(idx, edges) {
  const [n, _] = edges.shift();
  const roots = {};
  for (let i = 1; i <= n; i++) roots[i] = i;

  function find(node) {
    if (node !== roots[node]) roots[node] = find(roots[node]);
    return roots[node];
  }

  const cycleSet = new Set();
  function union(a, b) {
    const x = find(a),
      y = find(b);

    if (x === y) cycleSet.add(x);
    else if (x < y) roots[y] = x;
    else roots[x] = y;
  }

  edges.forEach(([s, e]) => {
    union(s, e);
  });

  const rootsSet = new Set();
  for (let i = 1; i <= n; i++) {
    const root = find(i);
    rootsSet.add(root);
  }

  const cycleRootsSet = new Set();
  const temp = [...cycleSet];
  temp.forEach((root) => {
    cycleRootsSet.add(find(root));
  });

  const result = rootsSet.size - cycleRootsSet.size;

  const txt = `Case ${idx + 1}: `;
  return (
    txt +
    (0 >= result
      ? "No trees."
      : result == 1
      ? "There is one tree."
      : `A forest of ${result} trees.`)
  );
}

solution(input);
