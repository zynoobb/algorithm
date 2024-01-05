const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  const N = +data.shift();

  if (N === 2) {
    console.log("1 2");
    return;
  }

  const arr = data.map((el) => el.split(" ").map(Number));

  const roots = {};
  for (let i = 1; i <= N; i++) roots[i] = i;

  function find(x) {
    if (x != roots[x]) roots[x] = find(roots[x]);
    return roots[x];
  }

  function union(a, b) {
    const x = find(a),
      y = find(b);

    if (x == y) return;
    else if (y > x) roots[y] = x;
    else roots[x] = y;
  }

  arr.forEach(([a, b]) => union(a, b));

  for (let i = 1; i <= N; i++) {
    for (let j = i + 1; j <= N; j++) {
      if (find(i) !== find(j)) {
        console.log(`${i} ${j}`);
        return;
      }
    }
  }
}

solution(input);
